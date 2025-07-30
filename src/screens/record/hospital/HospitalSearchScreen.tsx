// hospital/HospitalSearchScreen.tsx
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import { colors } from '../../../theme/color';
import { AppInput } from '../../../components/AppInput';
import { XMLParser } from 'fast-xml-parser';
const Config = require('react-native-config');

const { width } = Dimensions.get('window');

type HospitalSearchScreenProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (name: string) => void;
};

export default function HospitalSearchScreen({
  visible,
  onClose,
  onSelect,
}: HospitalSearchScreenProps) {
  //  const SERVICE_KEY = Config.SERVICE_KEY;
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!keyword) return;

    const SERVICE_KEY =
      'MC1h4938TtXp1nuIE6%2F9QqHUBp%2BJqtdX3%2FEK%2BZT9ZeyiNvWlQGyN0%2FptcDTNgcS31KJ9qk1Fv6hlpw1WVPXYBQ%3D%3D';

    try {
      const url = `https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=${SERVICE_KEY}&yadmNm=${encodeURIComponent(
        keyword,
      )}&pageNo=1&numOfRows=10`;

      // 기본값: json
      const response = await axios.get(url);
      console.log('response:', response);

      const result = response.data;
      console.log('API 응답:', result);

      const items = result?.response?.body?.items?.item;
      setResults(Array.isArray(items) ? items : items ? [items] : []);
      console.log('items:', items);
      console.log('results 상태:', results);
    } catch (error) {
      console.warn('API 요청 실패:', error);
      setResults([]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="병원 이름을 검색해주세요."
            value={keyword}
            onChangeText={setKeyword}
            onSubmitEditing={handleSearch}
          />
        </View>

        <FlatList
          data={results}
          keyExtractor={item => item.ykiho}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <View>
                <Text style={styles.hospitalName}>{item.yadmNm}</Text>
                <Text style={styles.hospitalAddr}>{item.addr}</Text>
              </View>
              <TouchableOpacity
                style={styles.selectBtn}
                onPress={() => {
                  onSelect(item.yadmNm);
                  onClose();
                }}
              >
                <Text style={styles.selectText}>선택하기</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>검색 결과가 없습니다.</Text>
          }
          contentContainerStyle={{ padding: 20 }}
        />

        <TouchableOpacity onPress={onClose} style={{ padding: 20 }}>
          <Text style={{ color: 'gray', textAlign: 'center' }}>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    padding: 20,
  },
  resultItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hospitalName: {
    fontSize: 16,
    color: colors.gray4,
  },
  hospitalAddr: {
    fontSize: 13,
    color: colors.gray3,
    marginTop: 2,
  },
  selectBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
  },
  selectText: {
    fontSize: 12,
    color: colors.primary,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
  },
});
