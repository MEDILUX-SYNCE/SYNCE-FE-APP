/* eslint-disable react-native/no-inline-styles */
import {
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

const notifications = [
  {
    id: 1,
    title: '아티클',
    description: '새로운 아티클이 올라왔어요! ‘멍을 빨리 빼고 싶다면?’',
    time: '1시간 전',
    img: require('../../assets/images/icons/articleIcon.png'),
  },
  {
    id: 2,
    title: '주치의 상담',
    description: "'김성형 원장님'의 답변이 등록되었어요.",
    subTitle: '좌우 회복 속도 차이 질문',
    subDescription:
      '수술은 예정된 대로 잘 끝났습니다. 지금은 수술 후 부기 때문에 라인이 높아 보일 수 있어요. 회복 경과를...',
    time: '2시간 전',
    img: require('../../assets/images/icons/counselingIcon.png'),
  },
  {
    id: 3,
    title: '오늘의 체크리스트',
    description: ['외출 시 선글라스 착용', '가벼운 운동', '처방약 복용'],
    time: '2시간 전',
    img: require('../../assets/images/icons/checklistIcon.png'),
  },
  {
    id: 4,
    title: '기록장',
    description: '기록을 안한지 이틀이 지났어요. 오늘의 경과를 기록해보세요.',
    time: '2시간 전',
    img: require('../../assets/images/icons/recordIcon.png'),
  },
];

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.header}>
        {/* 뒤로가기 & 메뉴 헤더 */}
        <TopNavigation title={'알림'} hasBack hasMenu />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView>
          {notifications.map(item => (
            <View key={item.id} style={styles.cardContainer}>
              <View style={styles.cardContent}>
                <Image
                  source={item.img}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
                <View style={styles.card}>
                  <AppText color="black" size="md" weight="medium">
                    {item.title}
                  </AppText>
                  {Array.isArray(item.description) ? (
                    item.description.map((line, idx) => (
                      <AppText
                        key={idx}
                        color="gray4"
                        size="md"
                        weight="medium"
                      >
                        • {line}
                      </AppText>
                    ))
                  ) : (
                    <AppText color="gray4" size="md" weight="medium">
                      {item.description}
                    </AppText>
                  )}
                  <AppText color="gray3" size="xs" weight="regular">
                    {item.time}
                  </AppText>
                  {(item.subTitle || item.subDescription) && (
                    <View style={styles.subContainer}>
                      {item.subTitle && (
                        <AppText color="gray4" size="sm" weight="medium">
                          {item.subTitle}
                        </AppText>
                      )}
                      {item.subDescription && (
                        <AppText color="gray3" size="sm" weight="medium">
                          {item.subDescription}
                        </AppText>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  cardContent: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  card: {
    gap: 4,
    paddingHorizontal: 16,
  },
  subContainer: {
    gap: 4,
    marginTop: 12,
    paddingLeft: 6,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray3,
  },
});
