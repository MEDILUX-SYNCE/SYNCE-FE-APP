/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';
import { AppButton } from '../../components/AppButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppListItemCard } from '../../components/AppListItemCard';

// 탭 이름들을 정의해주는 타입
export type BottomTabParamList = {
  홈: undefined;
  기록: undefined;
  아티클: undefined;
  내정보: undefined;
};

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView
      style={{ flex: 1, marginBottom: 100, backgroundColor: colors.white }}
    >
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
                navigation.navigate('Record');
              }}
            />
          </View>
        </View>
      </LinearGradient>

      {/* 체크 리스트 */}
      <AppListItemCard
        primaryTitle={'7일차'}
        title={'체크리스트'}
        borderColor={colors.redwhite3}
        items={[
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/checklist_sunglass.png')}
              />
            ),
            text: '외출 시 선글라스 착용',
            rightIcon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/notCheckCircle.png')}
              />
            ),
          },
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/checklist_walk.png')}
              />
            ),
            text: '가벼운 산책',
            rightIcon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/notCheckCircle.png')}
              />
            ),
          },
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/checklist_medicine.png')}
              />
            ),
            text: '처방약 복용',
            rightIcon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/notCheckCircle.png')}
              />
            ),
          },
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/checklist_wafer.png')}
              />
            ),
            text: '웨이퍼 착용',
            rightIcon: (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icons/notCheckCircle.png')}
              />
            ),
          },
        ]}
        onPress={() => Alert.alert('체크리스트 누름!')}
      />
      <View style={styles.moreButtonContainer}>
        <AppButton
          title={'주의사항 전체보기'}
          type="secondary"
          activate={true}
          onPress={() => {}}
        />
      </View>

      {/* 주치의 상담 */}
      <AppListItemCard
        title={'주치의 상담'}
        borderColor={colors.redwhite3}
        items={[
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/doctor.png')}
              />
            ),
            text: '김성형 의사',
            subText: '아이디 성형외과',
            rightIcon: (
              <AppButton
                size="small"
                type="gray"
                title={'상담하기'}
                activate
                onPress={() => Alert.alert('상담하기 버튼 누름!')}
              ></AppButton>
            ),
          },
        ]}
      />

      {/* 병원 리스트 */}
      <AppListItemCard
        primaryTitle={'연계 병원'}
        title={'리스트'}
        borderColor={colors.gray1}
        subTitle={
          '수술 관리 및 주치의 상담을 위해서는 병원과 연동이 필요해요. 연계 병원에서 상담 후 등록을 요청해주세요!'
        }
        items={[
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/idHospital.png')}
              />
            ),
            text: '아이디병원',
            subText: '서울 강남역',
          },
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/gAndgHospital.png')}
              />
            ),
            text: '지앤지병원',
            subText: '서울 봉은사역',
          },
          {
            icon: (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../assets/images/icons/topHospital.png')}
              />
            ),
            text: '압구정 탑라인',
            subText: '서울 압구정역',
          },
        ]}
        onPress={() => Alert.alert('체크리스트 누름!')}
      />
      <View style={styles.moreButtonContainer}>
        <AppButton
          title={'연계병원 전체보기'}
          type="secondary"
          activate={true}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    padding: 20,
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
    padding: 20,
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
