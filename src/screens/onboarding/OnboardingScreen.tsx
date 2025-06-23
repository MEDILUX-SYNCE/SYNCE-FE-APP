/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { AppText } from '../../components/AppText';
import { AppButton } from '../../components/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { colors } from '../../theme/color';

// 화면 너비, 높이 가져오기 (페이지 단위 스크롤)
const { width, height } = Dimensions.get('window');

// 타이틀 데이터 배열 정의
const TitleData = [
  {
    id: 1,
    title: ['의료진과 함께하는', '성형 후 회복 과정'],
    sub: '신스에서 경험해 보세요',
    image: require('../../assets/images/onboarding/onboarding.png'),
  },
  {
    id: 2,
    title: ['나의 회복과정을', '기록하고 따라가보세요'],
    sub: '회복 경과를 기록해요',
    image: require('../../assets/images/onboarding/onboarding.png'),
  },
  {
    id: 3,
    title: ['병원 연동 후 체계적 관리와', '주치의 상담을 받아요'],
    sub: '연동은 연계 병원에서 도와줄 거예요',
    image: require('../../assets/images/onboarding/onboarding.png'),
  },
];

export default function OnboardingScreen() {
  // 네비게이션 객체 사용
  type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Onboarding'
  >;
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  // useRef(): 컴포넌트 내부에서 특정 DOM 또는 React Native 컴포넌트 인스턴스를 기억하고 제어하는 Hook
  const flatListRef = useRef<FlatList>(null);

  // 현재 인덱스 설정
  const [currentIndex, setCurrentIndex] = useState(0);

  // 페이지 인디케이터 설정
  // eslint-disable-next-line react/no-unstable-nested-components
  const PageIndicator = ({
    count,
    currentIndex,
  }: {
    count: number;
    currentIndex: number;
  }) => {
    return (
      <View style={styles.indicatorContainer}>
        {Array.from({ length: count }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  const handNext = (index: number) => {
    if (index === TitleData.length - 1) {
      navigation.replace('Login');
    } else {
      flatListRef.current?.scrollToIndex({ index: index + 1 });
    }
  };

  type TitleItem = (typeof TitleData)[0];
  const renderItem = ({ item }: { item: TitleItem }) => (
    <View style={styles.page}>
      <AppText size="sm" color="gray4" style={{ marginBottom: 16 }}>
        {item.sub}
      </AppText>

      {item.title.map((title: string, i: number) => (
        <AppText key={i} size="xl" weight="bold" color="black">
          {title}
        </AppText>
      ))}

      <Image source={item.image} style={styles.image} resizeMode="contain" />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={TitleData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // onMomentumScrollEnd: 스크롤이 끝났을 때 호출되는 이벤트
        onMomentumScrollEnd={e => {
          // e.nativeEvent.contentOffset.x : 수평 스크롤 거리 (px)
          // Math.round(... / width) : 현재 몇 번째 인덱스인지 계산
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />

      <PageIndicator count={TitleData.length} currentIndex={currentIndex} />

      <View style={styles.bottomButtonContainer}>
        <AppButton
          title={currentIndex === TitleData.length - 1 ? '시작하기' : '다음'}
          onPress={() => handNext(currentIndex)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height * 0.12,
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginVertical: height * 0.1,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: height * 0.1,
    left: 20,
    right: 20,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: height * 0.22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary1,
  },
  inactiveDot: {
    backgroundColor: colors.gray1,
  },
});
