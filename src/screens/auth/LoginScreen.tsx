import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { AppText } from '../../components/AppText';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { colors } from '../../theme/color';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.length > 0 && password.length > 0;

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <TopNavigation title="로그인" hasBack />

          <AppText
            size="lg"
            weight="bold"
            color="black"
            style={styles.headerText}
          >
            로그인
          </AppText>

          <View>
            <AppInput
              placeholder="이메일 입력"
              value={email}
              onChangeText={setEmail}
            />
            <AppInput
              placeholder="비밀번호 입력"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              containerStyle={{ marginTop: 16, marginBottom: 32 }}
            />
          </View>

          {/* 하단 부분 */}
          <View style={styles.bottomScreen}>
            {/* 로그인과 찾기 부분 */}
            <View style={styles.loginButtonContainer}>
              <AppButton
                activate={isValid}
                title="로그인"
                onPress={() => {
                  console.log('로그인 시도');
                }}
              />

              <View style={styles.rowTextContainer}>
                <AppText color="gray4" weight="medium" style={styles.link}>
                  아이디 찾기
                </AppText>
                <AppText color="gray4" weight="medium" style={styles.separator}>
                  |
                </AppText>
                <AppText color="gray4" weight="medium" style={styles.link}>
                  비밀번호 찾기
                </AppText>
                <AppText color="gray4" weight="medium" style={styles.separator}>
                  |
                </AppText>
                <AppText color="gray4" weight="medium" style={styles.link}>
                  회원가입
                </AppText>
              </View>
            </View>

            {/* 간편 로그인 부분 */}
            <View style={styles.loginButtonContainer}>
              <View style={styles.rowSocialContainer}>
                <View style={styles.divider} />
                <AppText color="gray3" weight="medium" style={styles.link}>
                  간편 로그인
                </AppText>
                <View style={styles.divider} />
              </View>
              <AppButton
                title={'Apple로 로그인'}
                onPress={() => {}}
                activate={false}
                type="outline"
                icon={
                  <Image
                    source={require('../../assets/images/icons/apple.png')}
                    style={{ width: 32, height: 32 }}
                  />
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    padding: width * 0.05,
  },
  headerText: {
    marginBottom: 16,
  },
  bottomScreen: {
    gap: 24,
    marginVertical: 16,
  },
  loginButtonContainer: {
    gap: 8,
  },
  rowTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  link: {
    marginHorizontal: 4,
  },
  separator: {
    marginHorizontal: 2,
  },
  rowSocialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray2,
    width: width * 0.33,
    marginHorizontal: 8,
  },
});
