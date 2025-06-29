import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { colors } from '../../theme/color';
import { AppText } from '../../components/AppText';

const { width } = Dimensions.get('window');

const notifications = [
  {
    id: 1,
    title: '아티클',
    description: '새로운 아티클이 올라왔어요! ‘멍을 빨리 빼고 싶다면?’',
    time: '1시간 전',
  },
  {
    id: 2,
    title: '주치의 상담',
    description: "'김성형 원장님'의 답변이 등록되었어요.",
    subDescription:
      '좌우 회복 속도 차이 질문\n수술은 예정된 대로 잘 끝났습니다. 지금은 수술 후 부기 때문에 라인이 높아 보일 수 있어요. 회복 경과를...',
    time: '2시간 전',
  },
  {
    id: 3,
    title: '오늘의 체크리스트',
    description: '외출 시 선글라스 착용\n가벼운 운동\n처방약 복용',
    time: '2시간 전',
  },
  {
    id: 4,
    title: '기록장',
    description: '기록을 안한지 이틀이 지났어요. 오늘의 경과를 기록해보세요.',
    time: '2시간 전',
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* 뒤로가기 & 메뉴 헤더 */}
          <TopNavigation title={'알림'} hasBack hasMenu />

          {notifications.map(item => (
            <View key={item.id} style={styles.cardContainer}>
              <Image
                source={require('../../assets/images/icons/articleIcon.png')}
                style={{ width: 24, height: 24 }}
              />
              <View style={styles.card}>
                <AppText color="black" weight="medium" size="md">
                  {item.title}
                </AppText>
                <AppText color="black" size="sm" weight="regular">
                  {item.description}
                </AppText>
                {item.subDescription && (
                  <AppText color="gray4" size="md" weight="regular">
                    {item.subDescription}
                  </AppText>
                )}
                <AppText color="gray3" size="xs" weight="regular">
                  {item.time}
                </AppText>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    padding: width * 0.05,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  card: {
    gap: 4,
    paddingHorizontal: 16,
  },
});
