import { ScrollView, View } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { styles } from './styles';
import { AppCard } from '../../components/AppCard';

export default function RecordScreen() {
  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title={'눈 수술'} hasDropdown hasCancel={false} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 100 }}
      >
        {/* 1번째 카드 */}
        <AppCard id={0} />

        {/* 2번째 카드 */}
        <AppCard id={1} />
      </ScrollView>
    </View>
  );
}
