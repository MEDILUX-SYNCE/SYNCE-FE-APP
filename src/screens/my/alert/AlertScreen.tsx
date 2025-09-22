import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch } from 'react-native';
import { TopNavigation } from '../../../navigation/TopNavigation';
import { AppText } from '../../../components/AppText';
import { AppSwitch } from '../../../components/AppSwitch';
import { styles } from './styles';

export default function AlertScreen() {
  // 스위치 상태 관리
  const [isCounselingEnabled, setIsCounselingEnabled] = useState(false);
  const [isChecklistEnabled, setIsChecklistEnabled] = useState(true);
  const [isRecordEnabled, setIsRecordEnabled] = useState(true);
  const [isArticleEnabled, setIsArticleEnabled] = useState(true);

  // 전체 알림 설정 변수
  const isAllEnabled =
    isCounselingEnabled &&
    isChecklistEnabled &&
    isRecordEnabled &&
    isArticleEnabled;

  // 전체 알림 설정
  const toggleAll = () => {
    const newValue = !isAllEnabled;
    setIsCounselingEnabled(newValue);
    setIsChecklistEnabled(newValue);
    setIsRecordEnabled(newValue);
    setIsArticleEnabled(newValue);
  };

  return (
    <ScrollView style={styles.container}>
      <TopNavigation title="알림설정" hasBack hasCancel={false} />

      <View style={styles.topCard}>
        {/* 전체 알림 */}
        <View style={styles.row}>
          <AppText color="black" size="md" weight="medium">
            전체 알림
          </AppText>
          <AppSwitch value={isAllEnabled} onValueChange={toggleAll} />
        </View>
      </View>

      {/* 개별 알림 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <AppText color="black" size="md" weight="medium">
            주치의 상담 알림
          </AppText>
          <AppSwitch
            value={isCounselingEnabled}
            onValueChange={setIsCounselingEnabled}
          />
        </View>

        <View style={styles.row}>
          <AppText color="black" size="md" weight="medium">
            오늘의 체크리스트 알림
          </AppText>
          <AppSwitch
            value={isChecklistEnabled}
            onValueChange={setIsChecklistEnabled}
          />
        </View>

        <View style={styles.row}>
          <AppText color="black" size="md" weight="medium">
            기록장 알림
          </AppText>
          <AppSwitch
            value={isRecordEnabled}
            onValueChange={setIsRecordEnabled}
          />
        </View>

        <View style={styles.row}>
          <AppText color="black" size="md" weight="medium">
            아티클 알림
          </AppText>
          <AppSwitch
            value={isArticleEnabled}
            onValueChange={setIsArticleEnabled}
          />
        </View>
      </View>
    </ScrollView>
  );
}
