import React, { useState } from 'react';
import { Image, Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { styles } from './styles';
import { AppCard } from '../../components/AppCard';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';
import { AppButton } from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

export default function RecordScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [moreVisible, setMoreVisible] = useState(false);

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <View style={styles.top}>
        <TopNavigation
          title={'눈 수술'}
          titleSize="xl"
          hasDropdown
          hasMore
          hasCancel={false}
          onPressMore={() => setMoreVisible(true)}
        />
      </View>

      {/* 카드 영역 */}
      <View style={styles.infoCard}>
        <View>
          <View style={{ gap: 4 }}>
            <AppText size="sm" color="gray3" weight="bold">
              수술 2025.05.10.
            </AppText>
            <View style={{ gap: 12 }}>
              <AppText size="lg" color="primary1" weight="bold">
                눈 수술 7일차
              </AppText>
              <View style={styles.tagsContainer}>
                <View style={styles.tag}>
                  <AppText size="sm" weight="medium" color="primary1">
                    자연유착 쌍커풀
                  </AppText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 100, marginTop: 64 }}
      >
        <AppCard id={0} />
        <AppCard id={1} />
      </ScrollView>

      {/* 고정 버튼 */}
      <View style={styles.fixedButton}>
        <AppButton
          type="fill"
          size="smallMedium"
          icon={
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../../assets/images/icons/record.png')}
            />
          }
          title={'기록하기'}
          activate={true}
          onPress={() => {
            navigation.navigate('RecordReview');
          }}
        />
      </View>

      {/* 더보기 모달 */}
      {moreVisible && (
        <Modal
          transparent
          visible={moreVisible}
          animationType="fade"
          onRequestClose={() => setMoreVisible(false)}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
            activeOpacity={1}
            onPressOut={() => setMoreVisible(false)}
          >
            <View style={styles.menu}>
              {/* 수정하기 */}
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => {
                  setMoreVisible(false);
                  navigation.navigate('Record');
                }}
              >
                <AppText size="md" weight="medium" color="black">
                  수정하기
                </AppText>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('../../assets/images/icons/edit.png')}
                />
              </TouchableOpacity>

              {/* 구분선 */}
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.gray2,
                  marginHorizontal: 12,
                }}
              />

              {/* 삭제하기 */}
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => {
                  setMoreVisible(false);
                }}
              >
                <AppText size="md" weight="medium" color="error">
                  삭제하기
                </AppText>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('../../assets/images/icons/trash.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
