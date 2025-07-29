/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { AppText } from '../../components/AppText';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { colors } from '../../theme/color';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import dayjs from 'dayjs';
import SurgerySelectModal from './surgery/SurgerySelectModal';
import CustomStyledDatePicker from './date/CustomStyledDatePicker';

export default function RecordProgressScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedSurgeries, setSelectedSurgeries] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const handleSelectSurgery = (selected: string[]) => {
    setSelectedSurgeries(selected);
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title="기록장 추가" hasBack />

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
                  <AppText color="primary" size="md" weight="medium">
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
            <AppInput placeholder="수술 병원 선택" editable={false} />
          </View>

          {/* 주치의 성함 */}
          <View style={styles.inputContainer}>
            <AppText color="black" weight="medium" size="md">
              주치의 성함
            </AppText>
            <AppInput placeholder="수술을 집도하신 주치의 성함" />
          </View>

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
        </ScrollView>

        {/* 수술 선택 모달 */}
        <SurgerySelectModal
          visible={modalVisible}
          selected={selectedSurgeries}
          onClose={() => setModalVisible(false)}
          onConfirm={handleSelectSurgery}
        />
      </KeyboardAvoidingView>

      {/* 닐짜 선택 모달창 */}
      <CustomStyledDatePicker
        visible={dateModalVisible}
        initialDate={selectedDate ?? new Date()}
        onCancel={() => setDateModalVisible(false)}
        onConfirm={(date: React.SetStateAction<Date | null>) => {
          setSelectedDate(date);
          setDateModalVisible(false);
        }}
        onReset={() => setSelectedDate(null)}
      />
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
    gap: 4,
  },
  footer: {
    padding: 16,
  },
});
