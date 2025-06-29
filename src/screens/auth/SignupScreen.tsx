/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { colors } from '../../theme/color';
import { AppText } from '../../components/AppText';
import { AppButton } from '../../components/AppButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useRef, useState } from 'react';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AppInput } from '../../components/AppInput';
import { AppModal } from '../../components/AppModal';

const { width, height } = Dimensions.get('window');

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

export default function SignupScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [allChecked, setAllChecked] = useState(false);
  const [agree14, setAgree14] = useState(false);
  const [agreeService, setAgreeService] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeServiceModal, setAgreeServiceModal] = useState(false); // agreeServiceModal 상태 관리
  const [agreePrivacyModal, setAgreePrivacyModal] = useState(false); // agreePrivacyModal 상태 관리
  const [currentStep, setCurrentStep] = useState(0); // StepIndicator 상태 관리
  const [email, setEmail] = useState(''); // email 상태 관리
  const [emailError, setEmailError] = useState(false); // email error 상태 관리
  const [password, setPassword] = useState(''); // password 상태 관리
  const [passwordCheck, setPasswordCheck] = useState(''); // password 확인 상태 관리
  const [name, setName] = useState(''); // name 상태 관리
  const [phoneNumber, setPhoneNumber] = useState(''); // phoneNumber 상태 관리
  const [birth, setBirth] = useState(''); // birth 상태 관리
  const [timer, setTimer] = useState(180); // 3분(180초) timer 상태 관리
  const timerRef = useRef<NodeJS.Timeout | null>(null); // timer의 ID(참조) 저장
  const [code, setCode] = useState(''); // code 상태 관리
  const inputRef = useRef<TextInput>(null);

  const allAgreed = agree14 && agreeService && agreePrivacy;

  const toggleAll = () => {
    const next = !allChecked;
    setAllChecked(next);
    setAgree14(next);
    setAgreeService(next);
    setAgreePrivacy(next);
  };

  // StepIndicator 상태 관리
  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Home');
    }
  };

  // timer 변경될 때마다 실행
  useEffect(() => {
    // timer 끝났을 경우 useEffect 중지
    if (timer <= 0) {
      // timer 돌고 있을 경우 timerRef 중지
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }
    // 1초마다 timer 1씩 감소
    timerRef.current = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    // 컴포넌트가 언마운트 되거나 useEffect 재실행될 경우 timerRef 중지
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timer]);

  // timer format (10000 -> mm:ss)
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // step별 화면 관리
  const steps = [
    // step0
    <View key="step0">
      {/* 타이틀 */}
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          서비스 이용 약관에
        </AppText>
        <AppText color="black" size="lg" weight="bold">
          동의해주세요.
        </AppText>
      </View>
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
            <>
              <AppText
                size="sm"
                weight="medium"
                style={{
                  color: agree14 ? colors.gray4 : colors.gray3,
                }}
              >
                (필수) 만 14세 이상입니다
              </AppText>
            </>
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
                    textDecorationLine: 'none',
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
                    textDecorationLine: 'none',
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
        <AppModal
          title={'서비스 이용약관'}
          content={'대충 서비스 이용약관 내용입니다.'}
          visible={agreeServiceModal}
          onClose={() => setAgreeServiceModal(false)}
        />
        <AppModal
          title={'개인정보 수집이용'}
          content={'대충 개인정보 수집이용 내용입니다.'}
          visible={agreePrivacyModal}
          onClose={() => setAgreePrivacyModal(false)}
        />
      </View>
    </View>,

    // step1
    <View key="step1">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          로그인에 사용할
        </AppText>
        <AppText color="black" size="lg" weight="bold">
          이메일을 인증해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="이메일 입력"
            value={email}
            onChangeText={text => {
              const cleanedText = text.trim().replace(/\s+/g, '');
              setEmail(cleanedText);
              if (cleanedText.length > 0) {
                setEmailError(false);
              }
            }}
            onBlur={() => {
              if (email.length === 0) {
                setEmailError(true);
              }
            }}
            isError={emailError}
            errorText={
              emailError
                ? '아이디는 6~12자의 영문, 숫자, -, _만 사용 가능합니다'
                : undefined
            }
          />
        </View>
      </View>
    </View>,

    // step2
    <View key="step2">
      <View style={{ marginVertical: 16 }}>
        <View>
          <AppText color="black" size="lg" weight="bold">
            인증번호를 입력해주세요.
          </AppText>
          <View style={{ marginTop: 8 }}>
            <AppText color="gray4" size="sm" weight="medium">
              {email} 이메일로
            </AppText>
            <AppText color="gray4" size="sm" weight="medium">
              보내드린 인증번호 6자리를 입력해 주세요
            </AppText>
          </View>
        </View>
      </View>

      {/* 숨겨진 입력란 */}
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={text => {
          const filtered = text.replace(/[^0-9]/g, '');
          setCode(filtered.slice(0, 6));
        }}
        keyboardType="number-pad"
        maxLength={6}
        autoFocus
        style={{
          position: 'absolute',
          opacity: 0,
        }}
      />

      <View style={{ marginTop: 24, marginBottom: 32, gap: 12 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}>
          {/* 타이머 */}
          <Image
            source={require('../../assets/images/icons/timer.png')}
            style={{ width: 24, height: 24 }}
          />
          <View style={{ alignItems: 'flex-start' }}>
            <AppText color="gray3" size="md" weight="medium">
              {formatTime(timer)}
            </AppText>
          </View>
        </View>

        {/* 실제로 보이는 6자리 입력 박스 */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            inputRef.current?.focus();
          }}
          style={{
            gap: 8,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => {
            const filled = !!code[index]; // 입력된 칸 여부
            return (
              <View
                key={index}
                style={{
                  width: width * 0.13,
                  height: height * 0.09,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: filled ? colors.redwhite : colors.gray1,
                  backgroundColor: filled ? colors.redwhite : colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AppText color="primary1" size="xl" weight="bold">
                  {code[index] ?? ''}
                </AppText>
              </View>
            );
          })}
        </TouchableOpacity>

        {/* 재발송 */}
        <TouchableOpacity
          style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}
          onPress={() => {
            setCode('');
            setTimer(180);
          }}
        >
          <Image
            source={require('../../assets/images/icons/refresh.png')}
            style={{ width: 24, height: 24 }}
          />
          <AppText size="sm" color="primary1">
            인증번호 이메일 재발송
          </AppText>
        </TouchableOpacity>
      </View>
    </View>,

    // step3
    <View key="step3">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          로그인에 사용할
        </AppText>
        <AppText color="black" size="lg" weight="bold">
          비밀번호를 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="비밀번호 입력"
            value={password}
            onChangeText={text => {
              const cleanedText = text.trim().replace(/\s+/g, '');
              setPassword(cleanedText);
            }}
            secureTextEntry
          />
          <AppInput
            placeholder="비밀번호 확인 입력"
            value={passwordCheck}
            onChangeText={text => {
              const cleanedText = text.trim().replace(/\s+/g, '');
              setPasswordCheck(cleanedText);
            }}
            containerStyle={{ marginTop: 16, marginBottom: 32 }}
          />
        </View>
      </View>
    </View>,

    // step4
    <View key="step4">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          실명을 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="실명 입력"
            value={name}
            onChangeText={text => {
              const cleanedText = text.trim().replace(/\s+/g, '');
              setName(cleanedText);
            }}
          />
        </View>
      </View>
    </View>,

    // step5
    <View key="step5">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          휴대폰 번호를 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="휴대폰 번호 입력 (- 없이 숫자만 입력)"
            value={phoneNumber}
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
            }}
          />
        </View>
      </View>
    </View>,

    // step6
    <View key="step6">
      <View style={{ marginVertical: 16 }}>
        <AppText color="black" size="lg" weight="bold">
          생년월일을 입력해주세요.
        </AppText>
        <View style={{ marginTop: 24, marginBottom: 32 }}>
          <AppInput
            placeholder="생년월일 입력 ex) 20250631"
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
            }}
          />
        </View>
      </View>
    </View>,
  ];

  useEffect(() => {
    setAllChecked(agree14 && agreeService && agreePrivacy);
  }, [agree14, agreeService, agreePrivacy]);

  return (
    <View style={styles.screen}>
      {/* 헤더 */}
      <TopNavigation title={'회원가입'} hasBack />
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
      {currentStep == 0 && (
        <AppButton
          title="동의하고 가입하기"
          activate={allAgreed}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 1 && (
        <AppButton
          title="코드 받기"
          activate={!!email} // 비어있으면 false, 한 글자라도 있으면 true
          onPress={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <AppButton
          title="다음"
          activate={code.length === 6}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 3 && (
        <AppButton
          title="다음"
          activate={!!password && !!passwordCheck}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 4 && (
        <AppButton
          title="다음"
          activate={name.length >= 3}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 5 && (
        <AppButton
          title="다음"
          activate={phoneNumber.length >= 13}
          onPress={handleNextStep}
        />
      )}
      {currentStep === 6 && (
        <AppButton
          title="가입 완료"
          activate={birth.length >= 10}
          onPress={handleNextStep}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: colors.white,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  stepLine: {
    width: width * 0.125,
    height: 2,
    backgroundColor: colors.whitegrey,
  },
  stepDotActive: {
    backgroundColor: colors.primary1,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 12,
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
});
