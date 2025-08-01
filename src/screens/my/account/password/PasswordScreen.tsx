import { GestureResponderEvent, ScrollView } from 'react-native';
import { TopNavigation } from '../../../../navigation/TopNavigation';
import { colors } from '../../../../theme/color';
import { AppInput } from '../../../../components/AppInput';
import { useState } from 'react';
import { AppButton } from '../../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/RootStackParamList';
import { View } from 'react-native';
import { AppText } from '../../../../components/AppText';

export default function PasswordScreen() {
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <TopNavigation title={'비밀번호 변경'} hasBack hasCancel={false} />
      <View style={{ padding: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          비밀번호를 다시 한 번
        </AppText>
        <AppText color="black" size="lg" weight="bold">
          입력해주세요.
        </AppText>
        <View style={{ marginTop: 16, marginBottom: 32 }}>
          <AppInput
            placeholder="비밀번호 입력"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <AppButton
          title={'확인'}
          type="fill"
          activate={password.length > 8}
          onPress={() => navigation.navigate('NewPassword')}
        />
      </View>
    </ScrollView>
  );
}
