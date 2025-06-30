/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';
import { AppButton } from '../../components/AppButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      {/* 헤더 */}
      <LinearGradient
        colors={['#FF3766', '#EFB4A5', '#FFFFFF']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        {/* 헤더 로고 */}
        <View style={styles.headerTop}>
          <Image
            source={require('../../assets/images/logos/whiteLogo.png')}
            style={styles.logo}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notifications');
            }}
          >
            <Image
              source={require('../../assets/images/icons/notificationsOn.png')}
              style={styles.notification}
            />
          </TouchableOpacity>
        </View>
        {/* 병원 미연계시 */}
        <View>
          <View style={{ flexDirection: 'column', marginVertical: 16 }}>
            <AppText color="white" size="xl" weight="bold">
              수술 경과를 기록해
            </AppText>
            <AppText color="white" size="xl" weight="bold">
              체계적으로 관리해 보세요
            </AppText>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title={'경과 기록하기'}
              type="white"
              activate={true}
              onPress={() => {
                navigation.navigate('RecordProgress');
              }}
            />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.screen}>
        {/* 연계 병원 리스트 */}
        <View style={styles.hospitalBox}>
          <View style={{ flexDirection: 'row' }}>
            <AppText color="primary1" size="lg" weight="bold">
              연계 병원{' '}
            </AppText>
            <AppText color="black" size="lg" weight="bold">
              리스트
            </AppText>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <AppText color="gray4" size="sm" weight="medium">
              수술 관리 및 주치의 상담을 위해서는 병원과 연동이 필요해
            </AppText>
            <AppText color="gray4" size="sm" weight="medium">
              요. 연계 병원에서 상담 후 등록을 요청해주세요!
            </AppText>
          </View>
        </View>
        <View style={styles.hospitalBoxContainer}>
          <View style={styles.hospitalBoxColumn}>
            <Image
              source={require('../../assets/images/icons/idHospital.png')}
              style={styles.hospitalImage}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <AppText color="gray4" size="md" weight="medium">
                아이디병원
              </AppText>
              <AppText color="gray3" size="sm" weight="medium">
                서울 강남역
              </AppText>
            </View>
          </View>
          <View style={styles.hospitalBoxColumn}>
            <Image
              source={require('../../assets/images/icons/gAndgHospital.png')}
              style={styles.hospitalImage}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <AppText color="gray4" size="md" weight="medium">
                지앤지병원
              </AppText>
              <AppText color="gray3" size="sm" weight="medium">
                서울 봉은사역
              </AppText>
            </View>
          </View>
          <View style={styles.hospitalBoxColumn}>
            <Image
              source={require('../../assets/images/icons/topHospital.png')}
              style={styles.hospitalImage}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <AppText color="gray4" size="md" weight="medium">
                압구정 탑라인
              </AppText>
              <AppText color="gray3" size="sm" weight="medium">
                서울 압구정역
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.moreButtonContainer}>
          <AppButton
            title={'연계병원 전체보기'}
            type="secondary"
            activate={true}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 74,
    height: 34,
  },
  notification: {
    width: 32,
    height: 32,
  },
  container: {
    padding: 16,
  },
  recordButton: {
    backgroundColor: colors.primary1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  checklistBox: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  warningBox: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  doctorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray1,
    borderRadius: 12,
  },
  hospitalBoxContainer: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.gray1,
  },
  hospitalBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    padding: 16,
  },
  hospitalBoxColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBlockColor: colors.gray1,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  hospitalImage: {
    width: 45,
    height: 45,
    borderRadius: 4,
  },
  buttonContainer: { paddingVertical: 16 },
  moreButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
