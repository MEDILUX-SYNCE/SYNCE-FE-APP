import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText } from './AppText';
import { AppButton } from './AppButton';
import { colors } from '../theme/color';

const { width } = Dimensions.get('window');

interface AppModalProps {
  title: string;
  content: string;
  visible: boolean;
  onClose: () => void;
}

export const AppModal = ({
  title,
  content,
  visible,
  onClose,
}: AppModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <AppText color="black" weight="bold" size="lg">
            {title}
          </AppText>
          <AppText color="gray4" weight="medium" size="md">
            {content}
          </AppText>
          <TouchableOpacity style={styles.buttonContainer}>
            <AppButton title={'확인'} activate={true} onPress={onClose} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalContent: {
    gap: 10,
    padding: 20,
    margin: width * 0.05,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    marginVertical: 12,
  },
});
