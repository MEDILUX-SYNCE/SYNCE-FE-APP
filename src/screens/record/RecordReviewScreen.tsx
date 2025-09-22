import {
  View,
  ScrollView,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
} from 'react-native';
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
import { colors } from '../../theme/color';

// 기록 후기 화면
export default function RecordReviewScreen() {
  const insets = useSafeAreaInsets();
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
      <TopNavigation
        title="수술 N일차 (YY.DD)"
        hasBack
        hasCancel={false}
        hasCalendar
        onPressCalendar={() => setDateModalVisible(true)}
      />

      {/* 스크롤뷰 */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 140 }}
      >
        {/* 입력란 */}
        <View style={styles.inputContainer}>
          <View style={styles.cameraAndCheck}>
            {/* 사진 추가 */}
            <View style={styles.cameraContainer}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/camera.png')}
              />
              <AppText size="sm" weight="regular" color="gray3">
                0/5
              </AppText>
            </View>

            {/* 확인 아이콘 + 메시지 */}
            <View style={styles.checkContainer}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require('../../assets/images/icons/check.png')}
              />
              <AppText color="primary1" weight="regular" size="sm">
                비슷한 각도의 사진을 업로드하면 정확하게 비교할 수 있어요
              </AppText>
            </View>
          </View>

          {/* 구분선 */}
          <View style={styles.line} />

          {/* 증상 */}
          <View style={styles.surgeryContainer}>
            <AppText color="black" weight="bold" size="md">
              증상
            </AppText>

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

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
            >
              <AppButton
                title={'증상 추가'}
                icon={
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../../assets/images/icons/plus.png')}
                  />
                }
                type="outline"
                onPress={() => {}}
                activate={false}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* 회복 일기 */}
        <View style={styles.inputContainer}>
          <AppText color="black" weight="bold" size="md">
            회복 일기
          </AppText>
          <AppInput
            multiline={true}
            style={{ margin: 10, height: 130, textAlignVertical: 'top' }}
            placeholder="오늘의 상태를 자유롭게 기록해보세요!"
          />
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
    </View>
  );
}
