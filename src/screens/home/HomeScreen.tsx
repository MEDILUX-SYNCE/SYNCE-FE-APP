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
import { useState } from 'react';

export default function HomeScreen() {
  const [checklist, setChecklist] = useState([false, false, false, false]);

  const checklistItems = [
    '상체 높이고 수면',
    '가벼운 산책/스트레칭',
    '처방약 복용',
    '위마패 착용',
  ];

  const toggleChecklist = (index: number) => {
    const next = [...checklist];
    next[index] = !next[index];
    setChecklist(next);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* 수술일 + N일차 */}
      <View style={styles.header}>
        <AppText color="black" size="md" weight="medium">
          2025.05.10
        </AppText>
        <AppText color="black" size="xl" weight="bold">
          눈 수술 7일차
        </AppText>
        <TouchableOpacity style={styles.recordButton}>
          <AppText color="white" size="md" weight="bold">
            경과 기록하기
          </AppText>
        </TouchableOpacity>
      </View>

      {/* 체크리스트 */}
      <View style={styles.checklistBox}>
        <AppText color="black" size="lg" weight="bold">
          7일차 체크리스트
        </AppText>
        {checklistItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.checkItem}
            onPress={() => toggleChecklist(idx)}
          >
            <Image
              source={require('../../assets/images/icons/notCheckCircle.png')}
              style={[styles.checkIcon, checklist[idx] && { opacity: 0.5 }]}
            />
            <AppText
              color={checklist[idx] ? 'gray3' : 'black'}
              size="md"
              weight="regular"
            >
              {item}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      {/* 주의사항 */}
      <TouchableOpacity style={styles.warningBox}>
        <AppText color="primary1" size="sm" weight="medium">
          주의사항 전체보기
        </AppText>
      </TouchableOpacity>

      {/* 주치의 상담 */}
      <View style={styles.doctorBox}>
        <Image
          source={require('../../assets/images/icons/doctor.png')}
          style={styles.doctorImage}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <AppText color="black" size="md" weight="bold">
            김성형 의사
          </AppText>
          <AppText color="gray3" size="sm">
            아이디 성형외과
          </AppText>
        </View>
        <AppButton
          title="상담하기"
          activate
          onPress={() => {}}
          style={{ width: 100, height: 40 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
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
    marginVertical: 6,
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
    backgroundColor: colors.white,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
