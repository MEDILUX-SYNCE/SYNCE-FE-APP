import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppListItemCard } from '../../components/AppListItemCard';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { AppButton } from '../../components/AppButton';

export default function MyScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.screen}>
      {/* top */}
      <View style={styles.top}>
        <View style={{ margin: 16 }}>
          <AppText color="black" size="xl" weight="bold">
            내 정보
          </AppText>
        </View>
      </View>

      {/* 프로필 카드 */}
      <View style={{ position: 'absolute', top: 10 }}>
        <AppListItemCard
          borderColor={colors.redwhite3}
          items={[
            {
              icon: (
                <Image
                  style={{ width: 48, height: 48 }}
                  source={require('../../assets/images/icons/profile.png')}
                />
              ),
              text: '유영서',
              rightIcon: (
                <AppButton
                  title={'관리'}
                  type="gray"
                  size="small"
                  activate
                  onPress={() => navigation.navigate('Account')}
                />
              ),
            },
          ]}
        />
      </View>

      {/* 체크 리스트 */}
      <AppListItemCard
        borderColor={colors.white}
        items={[
          {
            icon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/notice.png')}
              />
            ),
            text: '공지사항',
            rightIcon: (
              <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/images/icons/rightArrow.png')}
                />
              </TouchableOpacity>
            ),
          },
          {
            icon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/alert.png')}
              />
            ),
            text: '알림설정',
            rightIcon: (
              <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/images/icons/rightArrow.png')}
                />
              </TouchableOpacity>
            ),
          },
          {
            icon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/info.png')}
              />
            ),
            text: '앱 정보',
            rightIcon: (
              <AppText color="gray3" size="md" weight="medium">
                25.1.1
              </AppText>
            ),
          },
        ]}
      />
    </View>
  );
}
