import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { AppListItemCard } from '../../../components/AppListItemCard';
import { TopNavigation } from '../../../navigation/TopNavigation';
import { colors } from '../../../theme/color';
import { AppField } from '../../../components/AppField';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStackParamList';
import { useState } from 'react';
import { AppModal } from '../../../components/modal/AppModal';

export default function AccountScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [logout, setLogout] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <TopNavigation title={'내 정보 관리'} hasBack hasCancel={false} />
      <AppListItemCard
        borderColor={colors.white}
        shadowColor={colors.white}
        padding={8}
        items={[
          {
            icon: (
              <Image
                style={{ width: 48, height: 48 }}
                source={require('../../../assets/images/icons/profile.png')}
              />
            ),
            text: '유영서',
          },
        ]}
      />
      <AppField text={'전화번호'} content={'+82 10-2697-9857'} />
      <AppField text={'이메일'} content={'yyoungsuh@gmail.com'} />
      <AppField
        text={'비밀번호 변경'}
        icon={
          <TouchableOpacity onPress={() => navigation.navigate('Password')}>
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../../../assets/images/icons/rightArrow.png')}
            />
          </TouchableOpacity>
        }
      />
      <AppField
        text={'로그아웃'}
        icon={
          <TouchableOpacity onPress={() => setLogout(!logout)}>
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../../../assets/images/icons/rightArrow.png')}
            />
          </TouchableOpacity>
        }
      />
      <AppModal
        title={'로그아웃'}
        content={'정말 로그아웃하시겠어요?'}
        visible={logout}
        onConfirm={() => navigation.navigate('Login')}
        onCancel={() => setLogout(false)}
      />
    </ScrollView>
  );
}
