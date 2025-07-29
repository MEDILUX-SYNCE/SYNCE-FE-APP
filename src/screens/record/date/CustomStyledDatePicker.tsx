import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  visible: boolean;
  initialDate: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onReset?: () => void;
};

export default function CustomStyledDatePicker({
  visible,
  initialDate,
  onConfirm,
  onCancel,
  onReset,
}: Props) {
  const [date, setDate] = React.useState(initialDate);

  React.useEffect(() => {
    setDate(initialDate);
  }, [initialDate]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={(_, selectedDate) => {
              if (selectedDate) setDate(selectedDate);
            }}
          />
          <View style={styles.buttonRow}>
            {onReset && (
              <TouchableOpacity onPress={onReset}>
                <Text style={styles.reset}>초기화</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.cancel}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onConfirm(date)}>
              <Text style={styles.confirm}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
  },
  cancel: {
    fontSize: 16,
    color: '#999',
  },
  confirm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  reset: {
    fontSize: 16,
    color: '#E55',
    marginRight: 16,
  },
});
