import { View } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { AppText } from '../../components/AppText';
import { AppButton } from '../../components/AppButton';
import { useState } from 'react';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AppInput } from '../../components/AppInput';
import { styles } from './styles';

export default function SignupScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [nameError, setNameError] = useState(
    '필수 입력 항목입니다. 실명을 입력해 주세요.',
  );
  const [phoneError, setPhoneError] = useState(
    '휴대폰 번호를 다시 한번 확인해 주세요.',
  );
  const [birthError, setBirthError] =
    useState('생년월일 8자리를 입력해 주세요.');

  // StepIndicator 상태 관리
  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Home');
    }
  };

  // step별 화면 관리
  const steps = [
    // step0
    <View key="step0">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          실명을 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            value={name}
            placeholder="실명 입력"
            isError={!!nameError}
            errorText={nameError}
            onChangeText={text => {
              const cleanedText = text.trim().replace(/\s+/g, '');
              setName(cleanedText);

              if (cleanedText.length > 2) {
                setNameError('');
              } else {
                setNameError('필수 입력 항목입니다. 실명을 입력해 주세요.');
              }
            }}
          />
        </View>
      </View>
    </View>,

    // step1
    <View key="step1">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          휴대폰 번호를 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="휴대폰 번호 입력 (- 없이 숫자만 입력)"
            value={phoneNumber}
            isError={!!phoneError}
            errorText={phoneError}
            onChangeText={text => {
              // 숫자가 아닌 문자 지워서 숫자만 남기기
              const onlyNumbers = text.replace(/[^0-9]/g, '');
              // 11자리로 자르기
              const sliced = onlyNumbers.slice(0, 11);

              // 포맷을 가공해서 보여줄 새로운 문자열 생성 (값 재할당을 위 해 let 사용)
              let formatted = sliced;

              // 3자리 이상 7자리 이하일 때 중간에 공백 추가
              if (sliced.length >= 3 && sliced.length <= 7) {
                formatted = sliced.slice(0, 3) + ' ' + sliced.slice(3);
              }
              if (sliced.length >= 8) {
                formatted =
                  sliced.slice(0, 3) +
                  ' ' +
                  sliced.slice(3, 7) +
                  ' ' +
                  sliced.slice(7);
              }
              setPhoneNumber(formatted.trim());

              if (formatted.length > 12) {
                setPhoneError('');
              } else {
                setPhoneError('휴대폰 번호를 다시 한번 확인해 주세요');
              }
            }}
          />
        </View>
      </View>
    </View>,

    // step2
    <View key="step2">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          생년월일을 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="생년월일 입력 ex) 20250631"
            isError={!!birthError}
            errorText={birthError}
            value={birth}
            onChangeText={text => {
              // 숫자가 아닌 문자 지워서 숫자만 남기기
              const onlyNumbers2 = text.replace(/[^0-9]/g, '');
              // 11자리로 자르기
              const sliced = onlyNumbers2.slice(0, 8);

              // 포맷을 가공해서 보여줄 새로운 문자열 생성 (값 재할당을 위 해 let 사용)
              let formattedBirth = sliced;

              // 3자리 이상 7자리 이하일 때 중간에 공백 추가
              if (sliced.length >= 5) {
                formattedBirth = sliced.slice(0, 4) + ' ' + sliced.slice(4, 6);
              }
              if (sliced.length >= 7) {
                formattedBirth += ' ' + sliced.slice(6, 8);
              }
              setBirth(formattedBirth.trim());

              if (formattedBirth.length > 9) {
                setBirthError('');
              } else {
                setBirthError('생년월일 8자리를 입력해 주세요');
              }
            }}
          />
        </View>
      </View>
    </View>,
  ];

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title={'회원가입'} hasBack hasCancel={false} />
      <View style={styles.stepIndicator}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepLine,
              index <= currentStep && styles.stepDotActive,
            ]}
          />
        ))}
      </View>

      {/* 현재 단계 화면 */}
      {steps[currentStep]}

      {/* 스텝별 버튼 */}
      {currentStep === 0 && (
        <AppButton
          title="다음"
          activate={name.length >= 3}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 1 && (
        <AppButton
          title="다음"
          activate={phoneNumber.length >= 13}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <AppButton
          title="가입 완료"
          activate={birth.length >= 10}
          onPress={handleNextStep}
        />
      )}
    </View>
  );
}
