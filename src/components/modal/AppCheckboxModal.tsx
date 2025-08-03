import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText } from '../AppText';
import { AppButton } from '../AppButton';
import { colors } from '../../theme/color';
import { useState } from 'react';
import { AppModal } from './AppModal';
import { AppCheckbox } from '../AppCheckbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

const { height } = Dimensions.get('window');

interface AppCheckboxModalProps {
  visible: boolean;
  title: string;
  firstContent?: string;
  secondContent?: string;
  thirdContent?: string;
  checkLabel?: string;
  onClose: () => void;
  onAgree: () => void;
}

export const AppCheckboxModal = ({
  visible,
  title,
  firstContent,
  secondContent,
  thirdContent,
  checkLabel,
  onClose,
  onAgree,
}: AppCheckboxModalProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [agree14, setAgree14] = useState(false);
  const [agreeService, setAgreeService] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeServiceModal, setAgreeServiceModal] = useState(false);
  const [agreePrivacyModal, setAgreePrivacyModal] = useState(false);

  const allChecked = agree14 && agreeService && agreePrivacy;
  const toggleAll = () => {
    const next = !allChecked;
    setAgree14(next);
    setAgreeService(next);
    setAgreePrivacy(next);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* 헤더 */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <AppText color="black" size="lg" weight="bold">
              {title}
            </AppText>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require('../../assets/images/icons/cancel.png')}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>

          {/* 약관 체크박스 */}
          <View style={{ marginTop: 16, marginBottom: 32 }}>
            <AppCheckbox
              checked={allChecked}
              onPress={toggleAll}
              label="모두 동의"
            />
            <View style={styles.divider} />
            <AppCheckbox
              checked={agree14}
              onPress={() => setAgree14(!agree14)}
              label={
                <AppText
                  size="sm"
                  weight="medium"
                  style={{
                    color: agree14 ? colors.gray4 : colors.gray3,
                  }}
                >
                  {firstContent}
                </AppText>
              }
            />
            <View style={{ flexDirection: 'row' }}>
              <AppCheckbox
                checked={agreeService}
                onPress={() => setAgreeService(!agreeService)}
                label={
                  <>
                    <AppText
                      size="sm"
                      weight="medium"
                      style={{
                        color: agreeService ? colors.gray4 : colors.gray3,
                      }}
                    >
                      {checkLabel}
                    </AppText>
                    <AppText
                      size="sm"
                      weight="medium"
                      style={{
                        color: agreeService ? colors.primary1 : colors.gray3,
                      }}
                      onPress={() => setAgreeServiceModal(true)}
                    >
                      {secondContent}
                    </AppText>
                  </>
                }
                highlight
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <AppCheckbox
                checked={agreePrivacy}
                onPress={() => setAgreePrivacy(!agreePrivacy)}
                label={
                  <>
                    <AppText
                      size="sm"
                      weight="medium"
                      style={{
                        color: agreePrivacy ? colors.gray4 : colors.gray3,
                      }}
                    >
                      {checkLabel}
                    </AppText>
                    <AppText
                      size="sm"
                      weight="medium"
                      style={{
                        color: agreePrivacy ? colors.primary1 : colors.gray3,
                      }}
                      onPress={() => setAgreePrivacyModal(true)}
                    >
                      {thirdContent}
                    </AppText>
                  </>
                }
                highlight
              />
            </View>

            {/* 서비스 이용약관 모달 */}
            <AppModal
              title={'서비스 이용약관'}
              content={'대충 서비스 이용약관 내용입니다.'}
              visible={agreeServiceModal}
              onConfirm={() => setAgreeServiceModal(false)}
            />

            {/* 개인정보 수집이용 모달 */}
            <AppModal
              title={'개인정보 수집이용'}
              content={'대충 개인정보 수집이용 내용입니다.'}
              visible={agreePrivacyModal}
              onConfirm={() => setAgreePrivacyModal(false)}
            />
          </View>

          {/* 하단 버튼 */}
          <AppButton
            activate={allChecked}
            title="동의하고 계속하기"
            onPress={onAgree}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: height * 0.8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 12,
  },
});
