import React, { useState } from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { AppInput } from '../../../components/AppInput';
import Config from 'react-native-config';
import { styles } from './styles';

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
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!keyword) return;

    const SERVICE_KEY = Config.SERVICE_KEY;
    console.log('SERVICE_KEY:', SERVICE_KEY);

    // API 요청
    try {
      // 문자열로 직접 URL 구성
      const url = `https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=${SERVICE_KEY}&yadmNm=${encodeURIComponent(
        keyword,
      )}&pageNo=1&numOfRows=10`;

      // 기본값: json
      const response = await axios.get(url, { responseType: 'json' });
      console.log('response:', response);

      // 응답 데이터 확인
      const result = response.data;
      console.log('API 응답:', result);

      // 결과가 없을 경우 빈 배열로 설정
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
      </View>
    </Modal>
  );
}
