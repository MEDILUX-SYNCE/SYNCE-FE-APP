import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { colors } from '../../theme/color';
import { useState } from 'react';
import { AppText } from '../../components/AppText';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList';

const { width } = Dimensions.get('window');

export default function AccountSearchScreen() {
  const [tab, setTab] = useState<'id' | 'pw'>('id');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [foundId, setFoundId] = useState('');
  const [email, setEmail] = useState('');

  // 이름/휴대폰 번호 일치 시 id 찾아줌
  const handleSearchId = () => {
    if (name && phoneNumber) {
      setFoundId('yyoungsuh@gmail.com');
    }
  };

  const isIdSearchVaild = name.length > 0 && phoneNumber.length > 0;
  const isPwSearchVaild = email.length > 0;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.screen}>
      <TopNavigation title={'아이디/비밀번호 찾기'} hasBack />

      {/* 탭 메뉴 */}
      <View style={styles.tapContainer}>
        <TouchableOpacity onPress={() => setTab('id')}>
          <AppText
            weight="bold"
            size="md"
            color={tab === 'id' ? 'black' : 'gray4'}
            style={[styles.tabItem, tab === 'id' && styles.activeTab]}
          >
            아이디 찾기
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('pw')}>
          <AppText
            weight="bold"
            size="md"
            color={tab === 'pw' ? 'black' : 'gray4'}
            style={[styles.tabItem, tab === 'pw' && styles.activeTab]}
          >
            비밀번호 찾기
          </AppText>
        </TouchableOpacity>
      </View>

      {/* 내용 영역 */}
      <View style={styles.contentContainer}>
        {tab === 'id' ? (
          foundId ? (
            <>
              <View style={styles.contentWrapper}>
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <Image
                    source={require('../../assets/images/icons/checkCircle.png')}
                    style={{ width: 32, height: 32 }}
                  />
                  <AppText weight="bold" color="black" size="lg">
                    유영서님의 아이디는
                  </AppText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <AppText weight="bold" color="primary1" size="lg">
                    {foundId}
                  </AppText>
                  <AppText weight="bold" color="black" size="lg">
                    입니다.
                  </AppText>
                </View>
              </View>

              <View style={styles.loginButtonContainer}>
                <AppButton
                  title={'로그인하기'}
                  onPress={() => navigation.navigate('Login')}
                  activate={true}
                />
              </View>
            </>
          ) : (
            <View>
              <AppInput
                placeholder="이름 입력"
                value={name}
                onChangeText={setName}
              />
              <AppInput
                placeholder="휴대폰 번호 입력"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                containerStyle={{ marginTop: 16, marginBottom: 32 }}
              />
              <AppButton
                title={'아이디 찾기'}
                onPress={handleSearchId}
                activate={isIdSearchVaild}
              />
            </View>
          )
        ) : (
          <View>
            <AppInput
              placeholder="이메일 입력"
              value={email}
              onChangeText={setEmail}
              containerStyle={{ marginTop: 16, marginBottom: 32 }}
            />
            <AppButton
              title={'임시번호 전송'}
              onPress={() => {}}
              activate={isPwSearchVaild}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: colors.white,
  },
  tapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  tabItem: {
    paddingBottom: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
  },
  loginButtonContainer: {},
  contentContainer: {
    gap: 8,
  },
  contentWrapper: {
    marginBottom: 32,
  },
});
