import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { AppText } from '../../components/AppText';
import { AppButton } from '../../components/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { colors } from '../../theme/color';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppModal } from '../../components/AppModal';

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

  // AgreementItem
  const AgreementItem = ({
    checked,
    onPress,
    label,
    bold,
    highlight,
  }: {
    checked: boolean;
    onPress: () => void;
    label: React.ReactNode;
    bold?: boolean;
    highlight?: boolean;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.agreementItem}>
        <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
          {checked && <MaterialIcons name="check" size={16} color="white" />}
        </View>
        <AppText
          style={[
            styles.label,
            bold && styles.boldLabel,
            {
              color: highlight
                ? checked
                  ? colors.primary1
                  : colors.gray3
                : colors.black,
              textDecorationLine: highlight && checked ? 'underline' : 'none',
            },
          ]}
        >
          {label}
        </AppText>
      </View>
    </TouchableOpacity>
  );

  // 네비게이션 객체 사용
  type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Onboarding'
  >;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

      {/* 약간 동의 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* 타이틀 */}
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <AppText color="black" size="lg" weight="bold">
                서비스 이용 약관에 동의해주세요.
              </AppText>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Image
                  source={require('../../assets/images/icons/cancel.png')}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>

            {/* 약관 체크박스 */}
            <View style={{ marginTop: 16, marginBottom: 32 }}>
              <AgreementItem
                checked={allChecked}
                onPress={toggleAll}
                label="모두 동의"
              />
              <View style={styles.divider} />
              <AgreementItem
                checked={agree14}
                onPress={() => setAgree14(!agree14)}
                label={
                  <AppText
                    size="sm"
                    weight="medium"
                    style={{
                      color: agree14 ? colors.gray4 : colors.gray3,
                    }}
                  >
                    (필수) 만 14세 이상입니다
                  </AppText>
                }
              />
              <View style={{ flexDirection: 'row' }}>
                <AgreementItem
                  checked={agreeService}
                  onPress={() => setAgreeService(!agreeService)}
                  label={
                    <>
                      <AppText
                        size="sm"
                        weight="medium"
                        style={{
                          color: agreeService ? colors.gray4 : colors.gray3,
                        }}
                      >
                        (필수){' '}
                      </AppText>
                      <AppText
                        size="sm"
                        weight="medium"
                        style={{
                          color: agreeService ? colors.primary1 : colors.gray3,
                        }}
                        onPress={() => setAgreeServiceModal(true)}
                      >
                        서비스 이용약관 확인
                      </AppText>
                    </>
                  }
                  highlight
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <AgreementItem
                  checked={agreePrivacy}
                  onPress={() => setAgreePrivacy(!agreePrivacy)}
                  label={
                    <>
                      <AppText
                        size="sm"
                        weight="medium"
                        style={{
                          color: agreePrivacy ? colors.gray4 : colors.gray3,
                        }}
                      >
                        (필수){' '}
                      </AppText>
                      <AppText
                        size="sm"
                        weight="medium"
                        style={{
                          color: agreePrivacy ? colors.primary1 : colors.gray3,
                        }}
                        onPress={() => setAgreePrivacyModal(true)}
                      >
                        개인정보 수집이용 동의
                      </AppText>
                    </>
                  }
                  highlight
                />
              </View>

              {/* 동의 약관 내용 모달들 */}
              <AppModal
                title={'서비스 이용약관'}
                content={'대충 서비스 이용약관 내용입니다.'}
                visible={agreeServiceModal}
                onConfirm={() => setAgreeServiceModal(false)}
                onCancel={() => setAgreeServiceModal(false)}
              />
              <AppModal
                title={'개인정보 수집이용'}
                content={'대충 개인정보 수집이용 내용입니다.'}
                visible={agreePrivacyModal}
                onConfirm={() => setAgreePrivacyModal(false)}
                onCancel={() => setAgreePrivacyModal(false)}
              />
            </View>

            {/* 하단 버튼 */}
            <AppButton
              activate={agree14 && agreeService && agreePrivacy}
              title="동의하고 계속하기"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Signup');
              }}
            />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
    bottom: height * 0.3,
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
  agreementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
    color: colors.black,
  },
  boldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightLabel: {
    color: colors.primary1,
  },
  checkboxBase: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: colors.gray3,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary1,
    borderWidth: 0,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 12,
  },
});
