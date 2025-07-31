/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
<<<<<<< HEAD
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
=======
import { View, ScrollView, TouchableOpacity } from 'react-native';
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
import { TopNavigation } from '../../navigation/TopNavigation';
import { AppText } from '../../components/AppText';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
<<<<<<< HEAD
import { colors } from '../../theme/color';
import { useState } from 'react';
import SurgerySelectModal from '../../components/SurgerySelectModal';
=======
import React, { useState } from 'react';
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import dayjs from 'dayjs';
<<<<<<< HEAD
import CustomStyledDatePicker from '../../components/CustomStyledDatePicker';
=======
import SurgerySelectScreen from './surgery/SurgerySelectScreen';
import SurgeryDateScreen from './date/SurgeryDateScreen';
import HospitalSearchScreen from './hospital/HospitalSearchScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825

// 기록장 추가 화면
export default function RecordProgressScreen() {
<<<<<<< HEAD
=======
  const insets = useSafeAreaInsets();
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedSurgeries, setSelectedSurgeries] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
<<<<<<< HEAD
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');
=======
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [hospitalModalVisible, setHospitalModalVisible] = useState(false);
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825

  const handleSelectSurgery = (selected: string[]) => {
    setSelectedSurgeries(selected);
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
<<<<<<< HEAD
      <TopNavigation title="기록장 추가" hasBack backIconType="cancel" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 수술 종류 */}
          <View style={styles.inputContainer}>
            <AppText color="black" weight="medium" size="md">
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
            {/* 태그 표시 */}
            <View style={styles.tagsContainer}>
              {selectedSurgeries.map((surgery, idx) => (
                <View key={idx} style={styles.tag}>
                  <AppText color="primary" size="sm" weight="medium">
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
            <AppText color="black" weight="medium" size="md">
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
            <AppText color="black" weight="medium" size="md">
              수술 병원
            </AppText>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HospitalSearch', {
                  onSelect: (name: string) => setSelectedHospital(name),
                })
              }
              activeOpacity={0.8}
            >
              <AppInput placeholder="수술 병원 선택" editable={false} />
            </TouchableOpacity>
          </View>

          {/* 주치의 성함 */}
          <View style={styles.inputContainer}>
            <AppText color="black" weight="medium" size="md">
              주치의 성함
            </AppText>
            <AppInput placeholder="수술을 집도하신 주치의 성함" />
          </View>
        </ScrollView>

        {/* 수술 선택 모달 */}
        <SurgerySelectModal
          visible={modalVisible}
          selected={selectedSurgeries}
          onClose={() => setModalVisible(false)}
          onConfirm={handleSelectSurgery}
        />

        {/* 하단 버튼 */}
        <View style={styles.footer}>
          <AppButton
            title="기록장 생성하기"
            activate={selectedSurgeries.length > 0 && !!selectedDate}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </KeyboardAvoidingView>

      {/* 닐찌 선택 모달창 */}
      <CustomStyledDatePicker
        visible={dateModalVisible}
        initialDate={selectedDate ?? new Date()}
=======
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
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
        onCancel={() => setDateModalVisible(false)}
        onConfirm={date => {
          setSelectedDate(date);
          setDateModalVisible(false);
        }}
        onReset={() => setSelectedDate(null)}
      />
<<<<<<< HEAD
=======

      {/* 병원 선택 모달창 */}
      <HospitalSearchScreen
        visible={hospitalModalVisible}
        onClose={() => setHospitalModalVisible(false)}
        onSelect={name => {
          setSelectedHospital(name);
          setHospitalModalVisible(false);
        }}
      />
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  scrollContent: { paddingBottom: 120 },
  inputContainer: { padding: 16, gap: 8 },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.redwhite,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
