import { Image, View } from 'react-native';
import { AppText } from './AppText';
import { colors } from '../theme/color';
import { records } from '../screens/record/data/RecordData';
import { styles } from '../screens/record/styles';

interface AppCardProps {
  id: number;
}

export const AppCard = ({ id }: AppCardProps) => {
  // id로 해당 데이터 찾기
  const record = records.find(item => item.id === id);

  if (!record) {
    return null; // 해당 id가 없으면 렌더링 안 함
  }

  return (
    <View>
      {/* 카드 */}
      <View style={{ padding: 16 }}>
        {record.title && (
          <AppText color="black" size="lg" weight="bold">
            {record.title}
          </AppText>
        )}
        <View
          style={{
            gap: 16,
            padding: 12,
            marginTop: 12,
            borderWidth: 1,
            borderColor: colors.gray1,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <Image source={record.image} resizeMode="cover" />
          <AppText color="gray4" size="md" weight="medium" numberOfLines={4}>
            {record.content}
          </AppText>

          {/* 태그 */}
          <View style={styles.tagsContainer}>
            {record.tags.map((tag, idx) => (
              <View key={idx} style={styles.recordTag}>
                <AppText size="md" weight="medium" color="gray4">
                  {tag}
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* 날짜 */}
        <View
          style={{
            gap: 16,
            padding: 12,
            borderWidth: 1,
            borderTopWidth: 0, // 겹침 제거
            borderColor: colors.gray1,
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <AppText color="gray3" size="sm" weight="regular" numberOfLines={4}>
            {record.date}
          </AppText>
        </View>
      </View>
    </View>
  );
};
