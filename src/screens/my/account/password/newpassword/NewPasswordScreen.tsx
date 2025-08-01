import { ScrollView, View } from 'react-native';
import { TopNavigation } from '../../../../../navigation/TopNavigation';
import { AppButton } from '../../../../../components/AppButton';
import { AppText } from '../../../../../components/AppText';
import { AppInput } from '../../../../../components/AppInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../navigation/RootStackParamList';
import { colors } from '../../../../../theme/color';
import { AppModal } from '../../../../../components/AppModal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function () {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [passwordChange, setPasswordChange] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <TopNavigation title={'비밀번호 변경'} hasBack hasCancel={false} />
      <View style={{ padding: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          새로운 비밀번호를
        </AppText>
        <AppText color="black" size="lg" weight="bold">
          입력해주세요.
        </AppText>
        <View style={{ marginTop: 16, marginBottom: 32 }}>
          <AppInput
            placeholder="비밀번호 입력"
            value={newPassword}
            onChangeText={setNewPassword}
            errorText={
              newPassword.length < 8
                ? '8~16자의 영문 소문자, 숫자, 특수문자를 사용하세요'
                : ''
            }
            secureTextEntry
          />
          <AppInput
            placeholder="비밀번호 재입력"
            value={newPasswordCheck}
            onChangeText={setNewPasswordCheck}
            errorText={
              newPassword == newPasswordCheck
                ? ''
                : '비밀번호를 다시 한번 확인해 주세요'
            }
            secureTextEntry
          />
        </View>
        <AppButton
          title={'확인'}
          type="fill"
          activate={newPassword.length > 0 && newPasswordCheck.length > 0}
          onPress={() => setPasswordChange(!passwordChange)}
        />
        <AppModal
          title={'비밀번호 변경 완료'}
          content={'내 정보 관리 화면으로 이동하시겠어요?'}
          visible={passwordChange}
          onConfirm={() => navigation.navigate('Account')}
          onCancel={() => setPasswordChange(false)}
        />
      </View>
    </ScrollView>
  );
}
