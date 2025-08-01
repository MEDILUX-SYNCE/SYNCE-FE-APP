import {
  Dimensions,
  Image,
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
  onConfirm: () => void;
  onCancel: () => void;
}

export const AppModal = ({
  title,
  content,
  visible,
  onConfirm,
  onCancel,
}: AppModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <AppText color="black" weight="bold" size="lg">
              {title}
            </AppText>
            <TouchableOpacity onPress={onCancel}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/icons/cancel.png')}
              />
            </TouchableOpacity>
          </View>
          <AppText color="gray4" weight="medium" size="md">
            {content}
          </AppText>
          <TouchableOpacity style={styles.buttonContainer}>
            <AppButton
              title={'확인'}
              size="medium"
              activate={true}
              onPress={onConfirm}
            />
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
    margin: width * 0.1,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    marginVertical: 12,
  },
});
