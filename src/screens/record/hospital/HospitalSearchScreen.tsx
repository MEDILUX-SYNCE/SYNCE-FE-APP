/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import { colors } from '../../../theme/color';
import { TopNavigation } from '../../../navigation/TopNavigation';
import { AppInput } from '../../../components/AppInput';
import { RootStackParamList } from '../../../navigation/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const Config = require('react-native-config');

const { width } = Dimensions.get('window');

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function HospitalSearchScreen() {
  const SERVICE_KEY = Config.SERVICE_KEY;
  const route = useRoute();
  const navigation = useNavigation<Navigation>();
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const { onSelect } = route.params as { onSelect: (name: string) => void };

  const handleSearch = async () => {
    if (!keyword) return;

    try {
      const response = await axios.get(
        'https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList',
        {
          params: {
            ServiceKey: SERVICE_KEY,
            yadmNm: keyword,
            pageNo: 1,
            numOfRows: 10,
            _type: 'json',
          },
        },
      );

      const items = response.data.response.body.items?.item;
      setResults(Array.isArray(items) ? items : [items]);
    } catch (error) {
      console.warn('API 요청 실패:', error);
    }
  };

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title="수술 병원 찾기" hasBack />

      {/* 검색 입력란 */}
      <View style={styles.inputContainer}>
        <AppInput
          placeholder="병원 이름을 검색해주세요."
          value={keyword}
          onChangeText={setKeyword}
          onSubmitEditing={handleSearch}
        />
      </View>

      {/* 검색 결과 */}
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
                navigation.goBack();
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
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hospitalAddr: {
    fontSize: 13,
    color: '#555',
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
