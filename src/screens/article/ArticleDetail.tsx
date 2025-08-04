import { Image, ScrollView, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { AppText } from '../../components/AppText';
import { styles } from './styles';
import { TopNavigation } from '../../navigation/TopNavigation';

type ArticleDetailRouteProp = RouteProp<RootStackParamList, 'ArticleDetail'>;

export default function ArticleDetailScreen() {
  const route = useRoute<ArticleDetailRouteProp>();
  const { article } = route.params;

  return (
    <>
      {/* 헤더 */}
      <TopNavigation title={'아티클'} hasBack hasCancel={false} />

      {/* 스크롤바 */}
      <ScrollView
        style={styles.screen}
        contentContainerStyle={{ paddingBottom: 64 }}
      >
        {/* 네용*/}
        <View>
          {/* 상단 이미지 */}
          <Image
            source={article.image}
            style={{ width: '100%' }}
            resizeMode="cover"
          />

          <View style={{ margin: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 8,
              }}
            >
              {/* 태그 */}
              {article.tags.map((tag, idx) => (
                <AppText key={idx} size="sm" weight="bold" color="primary1">
                  {tag}
                </AppText>
              ))}
            </View>

            <View style={{ gap: 24 }}>
              {/* 1번째 */}
              <AppText size="xl" weight="bold" color="black">
                {article.title}
              </AppText>

              <AppText size="sm" color="gray4">
                {article.desc}
              </AppText>

              {/* 2번째 */}
              <AppText size="xl" weight="bold" color="black">
                {article.secondTitle}
              </AppText>

              <AppText size="sm" color="gray4">
                {article.secondDesc}
              </AppText>

              {/* 중간 이미지 */}
              <Image
                source={article.secondImage}
                style={{ width: '100%' }}
                resizeMode="cover"
              />

              {/* 3번째 */}
              <AppText size="xl" weight="bold" color="black">
                {article.thirdTitle}
              </AppText>

              <AppText size="sm" color="gray4">
                {article.thirdDesc}
              </AppText>

              {/* 4번째 */}
              <AppText size="xl" weight="bold" color="black">
                {article.fourTitle}
              </AppText>

              <AppText size="sm" color="gray4">
                {article.fourDesc}
              </AppText>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
