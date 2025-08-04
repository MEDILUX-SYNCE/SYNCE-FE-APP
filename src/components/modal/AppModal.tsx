import { Image, Modal, TouchableOpacity, View } from 'react-native';
import { AppText } from '../AppText';
import { AppButton } from '../AppButton';
import { styles } from './styles';

interface AppModalProps {
  title: string;
  content: string;
  visible: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
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
            {onCancel && (
              <TouchableOpacity onPress={onCancel}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/images/icons/cancel.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          <AppText color="gray4" weight="medium" size="md">
            {content}
          </AppText>
          <TouchableOpacity style={styles.buttonContainer}>
            {onConfirm && (
              <AppButton
                title={'확인'}
                size="medium"
                activate={true}
                onPress={onConfirm}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
