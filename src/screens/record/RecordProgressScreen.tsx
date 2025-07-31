/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { AppText } from '../../components/AppText';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import dayjs from 'dayjs';
import SurgerySelectScreen from './surgery/SurgerySelectScreen';
import SurgeryDateScreen from './date/SurgeryDateScreen';
import HospitalSearchScreen from './hospital/HospitalSearchScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

// 기록장 추가 화면
export default function RecordProgressScreen() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedSurgeries, setSelectedSurgeries] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [hospitalModalVisible, setHospitalModalVisible] = useState(false);

  const handleSelectSurgery = (selected: string[]) => {
    setSelectedSurgeries(selected);
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title="기록장 추가" hasCancel={true} />

      {/* 스크롤뷰 */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 140 }}
      >
        {/* 수술 종류 */}
        <View style={styles.inputContainer}>
          <AppText color="black" weight="bold" size="md">
            수술 종류
          </AppText>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}
          >
            <View pointerEvents="none">
              <AppInput
                placeholder="수술 종류 선택"
                value={selectedSurgeries.join(', ')}
                editable={false}
              />
            </View>
          </TouchableOpacity>

          {/* 선택된 수술 종류 */}
          <View style={styles.tagsContainer}>
            {selectedSurgeries.map((surgery, idx) => (
              <View key={idx} style={styles.tag}>
                <AppText color="primary" size="md" weight="bold">
                  {surgery}
                </AppText>
                <AppText
                  color="primary"
                  size="sm"
                  weight="medium"
                  onPress={() =>
                    setSelectedSurgeries(prev =>
                      prev.filter(item => item !== surgery),
                    )
                  }
                >
                  X
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* 수술 일자 */}
        <View style={styles.inputContainer}>
          <AppText color="black" weight="bold" size="md">
            수술 일자
          </AppText>
          <TouchableOpacity onPress={() => setDateModalVisible(true)}>
            <AppInput
              placeholder="수술 일자 선택"
              value={
                selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : ''
              }
              editable={false}
            />
          </TouchableOpacity>
        </View>

        {/* 수술 병원 */}
        <View style={styles.inputContainer}>
          <AppText color="black" weight="bold" size="md">
            수술 병원
          </AppText>
          <TouchableOpacity onPress={() => setHospitalModalVisible(true)}>
            <AppInput
              placeholder="수술 병원 선택"
              value={selectedHospital}
              editable={false}
            />
          </TouchableOpacity>
        </View>

        {/* 주치의 성함 */}
        <View style={styles.inputContainer}>
          <AppText color="black" weight="bold" size="md">
            주치의 성함
          </AppText>
          <AppInput placeholder="수술을 집도하신 주치의 성함" />
        </View>
      </ScrollView>

      {/* 하단 버튼 (하단 고정) */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <AppButton
          title="기록장 생성하기"
          activate={selectedSurgeries.length > 0 && !!selectedDate}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>

      {/* 수술 선택 모달 */}
      <SurgerySelectScreen
        visible={modalVisible}
        selected={selectedSurgeries}
        onClose={() => setModalVisible(false)}
        onConfirm={handleSelectSurgery}
      />

      {/* 날짜 선택 모달창 */}
      <SurgeryDateScreen
        visible={dateModalVisible}
        initialDate={selectedDate}
        onCancel={() => setDateModalVisible(false)}
        onConfirm={date => {
          setSelectedDate(date);
          setDateModalVisible(false);
        }}
        onReset={() => setSelectedDate(null)}
      />

      {/* 병원 선택 모달창 */}
      <HospitalSearchScreen
        visible={hospitalModalVisible}
        onClose={() => setHospitalModalVisible(false)}
        onSelect={name => {
          setSelectedHospital(name);
          setHospitalModalVisible(false);
        }}
      />
    </View>
  );
}

