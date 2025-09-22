import React, { useState } from 'react';
import { Modal, View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-paper-dates';
import { AppButton } from './AppButton';
import dayjs from 'dayjs';
import { AppText } from './AppText';
import { styles } from './styles';

type Props = {
  visible: boolean;
  initialDate: Date;
  onCancel: () => void;
  onConfirm: (date: Date) => void;
  onReset?: () => void;
};

export default function CustomStyledDatePicker({
  visible,
  initialDate,
  onCancel,
  onConfirm,
  onReset,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.Pickercontainer}>
          <View style={styles.calendarWrapper}>
            {/* 헤더 영역 */}
            <View style={styles.header}>
              <View>
                <AppText color="black" weight="regular" size="sm">
                  Select date
                </AppText>
                <AppText color="black" weight="medium" size="xxl">
                  {dayjs(selectedDate).format('ddd, MMM D')}
                </AppText>
              </View>
            </View>

            {/* 달력 영역 */}
            <Calendar
              locale="ko"
              mode="single"
              date={selectedDate}
              onChange={({ date }) => {
                if (date) setSelectedDate(date);
              }}
            />

            {/* 버튼 영역 */}
            <View style={styles.buttonRow}>
              {onReset && (
                <AppButton
                  type="white"
                  size="small"
                  title="초기화"
                  onPress={onReset}
                  activate
                />
              )}
              <View style={styles.buttonRight}>
                <AppButton
                  type="white"
                  size="small"
                  title="취소"
                  onPress={onCancel}
                  activate
                />
                <AppButton
                  type="white"
                  size="small"
                  title="확인"
                  onPress={() => onConfirm(selectedDate)}
                  activate
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
