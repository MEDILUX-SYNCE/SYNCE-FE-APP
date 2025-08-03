import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  View,
} from 'react-native';
import { AppText } from '../../components/AppText';
import { AppButton } from '../../components/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { TouchableOpacity } from 'react-native';
import { AppModal } from '../../components/modal/AppModal';
import { colors } from '../../theme/color';
import { styles } from './styles';
import { AppCheckbox } from '../../components/AppCheckbox';
import { AppCheckboxModal } from '../../components/modal/AppCheckboxModal';

// 화면 너비, 높이 가져오기 (페이지 단위 스크롤)
const { width } = Dimensions.get('window');

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
  const [modalVisible, setModalVisible] = useState(false);

  const [agree14, setAgree14] = useState(false);
  const [agreeService, setAgreeService] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeServiceModal, setAgreeServiceModal] = useState(false);
  const [agreePrivacyModal, setAgreePrivacyModal] = useState(false);

  const allChecked = agree14 && agreeService && agreePrivacy;
  const toggleAll = () => {
    const next = !allChecked;
    setAgree14(next);
    setAgreeService(next);
    setAgreePrivacy(next);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // useRef(): 컴포넌트 내부에서 특정 DOM 또는 React Native 컴포넌트 인스턴스를 기억하고 제어하는 Hook
  const flatListRef = useRef<FlatList>(null);

  // 현재 인덱스 설정
  const [currentIndex, setCurrentIndex] = useState(0);

  // 페이지 인디케이터 설정
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
      setModalVisible(true);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <FlatList
        ref={flatListRef}
        data={TitleData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />
      <PageIndicator count={TitleData.length} currentIndex={currentIndex} />
      <View style={styles.bottomButtonContainer}>
        {currentIndex === TitleData.length - 1 ? (
          <View style={{ gap: 16 }}>
            <AppButton
              type={'outline'}
              activate={true}
              icon={
                <Image
                  source={require('../../assets/images/icons/googleLogo.png')}
                />
              }
              title={'구글로 시작하기'}
              onPress={() => handNext(currentIndex)}
            />
            <AppButton
              type={'black'}
              activate={true}
              icon={
                <Image
                  source={require('../../assets/images/icons/appleLogo.png')}
                />
              }
              title={'애플로 시작하기'}
              onPress={() => handNext(currentIndex)}
            />
          </View>
        ) : (
          <AppButton
            activate={true}
            title={'다음'}
            onPress={() => handNext(currentIndex)}
          />
        )}
      </View>

      {/* 이용 약관 모달 */}
      <AppCheckboxModal
        visible={modalVisible}
        title="서비스 이용 약관에  동의해주세요."
        firstContent="(필수) 만 14세 이상입니다"
        checkLabel="(필수) "
        secondContent="서비스 이용약관 확인"
        thirdContent="개인정보 수집이용 동의"
        onClose={() => setModalVisible(false)}
        onAgree={() => {
          setModalVisible(false);
          navigation.navigate('Signup');
        }}
      />
    </SafeAreaView>
  );
}
