import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AppText } from '../../components/AppText';
import { articles, categories } from './data/ArticleCategories';
import { useState } from 'react';

export default function ArticleScreen() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const filteredArticles =
    selectedCategory === '전체'
      ? articles
      : articles.filter(article =>
          article.tags.some(tag => tag.includes(selectedCategory)),
        );

  return (
    <ScrollView style={styles.screen}>
      {/* 헤더 */}
      <View style={{ margin: 16 }}>
        <AppText color="black" size="xl" weight="bold">
          아티클
        </AppText>
      </View>

      {/* 카테고리 탭 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 16 }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => setSelectedCategory(category)}
          >
            <AppText
              size="sm"
              color={selectedCategory === category ? 'primary1' : 'gray4'}
              weight="medium"
            >
              {category}
            </AppText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 섹션 타이틀 */}
      <View style={{ marginHorizontal: 16, marginTop: 24 }}>
        <AppText size="md" weight="bold" color="black">
          오늘의 추천 아티클
        </AppText>
      </View>

      {/* 아티클 모음 */}
      {filteredArticles.map(article => (
        <View key={article.id} style={styles.articleCard}>
          <Image source={article.image} style={styles.thumbnail} />
          <View style={{ padding: 12 }}>
            <AppText
              size="sm"
              weight="bold"
              color="black"
              style={{ marginBottom: 4 }}
            >
              {article.title}
            </AppText>
            <AppText size="xs" color="gray4" numberOfLines={2}>
              {article.desc}
            </AppText>
            <View
              style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}
            >
              {article.tags.map((tag, idx) => (
                <AppText
                  key={idx}
                  size="xs"
                  color="primary1"
                  style={{ marginRight: 8 }}
                >
                  {tag}
                </AppText>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
