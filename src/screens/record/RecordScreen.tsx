import { ScrollView, View } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { styles } from './styles';
import { AppCard } from '../../components/AppCard';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';

export default function RecordScreen() {
  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <View style={styles.top}>
        <TopNavigation
          title={'눈 수술'}
          titleSize="xl"
          hasDropdown
          hasCancel={false}
        />
      </View>
      <View
        style={{
          top: 65,
          width: '90%',
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: colors.white,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.redwhite3,
          shadowColor: '#FFE2E7',
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 10,
        }}
      >
        <View style={{ padding: 16 }}>
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
                  <AppText size="sm" weight="bold" color="primary1">
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
        {/* 1번째 카드 */}
        <AppCard id={0} />

        {/* 2번째 카드 */}
        <AppCard id={1} />
      </ScrollView>
    </View>
  );
}
