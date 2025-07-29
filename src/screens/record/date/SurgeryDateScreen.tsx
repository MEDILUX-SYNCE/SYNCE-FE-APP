import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../theme/color';
import { fontSizes } from '../../../theme/fontSizes';

const { width } = Dimensions.get('window');

interface Props {
  visible: boolean;
  initialDate: Date | null;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onReset?: () => void;
}

export default function SurgeryDateScreen({
  visible,
  initialDate,
  onCancel,
  onConfirm,
  onReset,
}: Props) {
  const [selectedDateStr, setSelectedDateStr] = useState<string>(
    initialDate ? formatDate(initialDate) : formatDate(new Date()),
  );

  useEffect(() => {
    setSelectedDateStr(
      initialDate ? formatDate(initialDate) : formatDate(new Date()),
    );
  }, [initialDate]);

  const parsedDate = new Date(selectedDateStr);
  const displayDate = parsedDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View>
          <View style={styles.modalCard}>
            {/* 상단 설명 */}
            <Text style={styles.selectLabel}>Select date</Text>

            {/* 날짜 표시와 연필 아이콘 */}
            <View style={styles.dateRow}>
              <Text style={styles.dateText}>{displayDate}</Text>
              <Icon name="edit" size={20} color={colors.gray4} />
            </View>

            {/* 달력 */}
            <Calendar
              current={selectedDateStr}
              onDayPress={day => setSelectedDateStr(day.dateString)}
              markedDates={{
                [selectedDateStr]: {
                  selected: true,
                  selectedColor: colors.primary1,
                  selectedTextColor: colors.white,
                },
                [formatDate(new Date())]: {
                  marked: false,
                  customStyles: {
                    text: {
                      color: colors.primary1,
                    },
                  },
                },
              }}
              markingType={'custom'}
              theme={{
                arrowColor: colors.primary1,
                textMonthFontSize: fontSizes.sm,
                textMonthFontWeight: 'regular',
                textDayFontSize: fontSizes.sm,
              }}
              style={styles.calendar}
            />

            {/* 하단 버튼 */}
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={onReset} style={styles.buttonWrapper}>
                <Text style={styles.reset}>초기화</Text>
              </TouchableOpacity>

              {/* 오른쪽 버튼 */}
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={onCancel}>
                  <Text style={styles.cancel}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onConfirm(new Date(selectedDateStr))}
                >
                  <Text style={styles.confirm}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const formatDate = (date: Date): string => date.toISOString().split('T')[0];

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: width * 0.9,
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  selectLabel: {
    fontSize: fontSizes.sm,
    color: colors.gray4,
    marginBottom: 24,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    fontSize: fontSizes.xxl,
    fontWeight: 'regular',
    color: colors.black,
    flex: 1,
  },
  calendar: {
    borderTopWidth: 1,
    borderTopColor: colors.gray1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 36,
  },
  reset: {
    fontSize: fontSizes.md,
    color: colors.primary1,
    fontWeight: 'regular',
  },
  cancel: {
    fontSize: fontSizes.md,
    color: colors.gray3,
    fontWeight: 'regular',
  },
  confirm: {
    fontSize: fontSizes.md,
    color: colors.primary1,
    fontWeight: 'regular',
  },
});
