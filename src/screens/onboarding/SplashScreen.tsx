import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from '../../components/AppText';
import { colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

export default function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['#EB4163', '#DED89E', '#FFFFFF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* 텍스트 */}
      <AppText size="xl" color="white" weight="bold">
        의료진과 함께 하는
      </AppText>
      <AppText size="xl" color="white" weight="bold">
        시술 후 회복 케어
      </AppText>

      {/* 로고 */}
      <Image
        source={require('../../assets/images/logos/whiteLogo.png')}
        style={{ width: 200, height: 100 }}
      />

      {/* 간편 로그인 + 버튼 */}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        {/* 간편 로그인 */}
        <View style={{ gap: 8, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              height: 1,
              backgroundColor: colors.gray2,
              width: '35%',
            }}
          />
          <AppText size="md" color="white" weight="medium">
            간편 로그인
          </AppText>
          <View
            style={{
              height: 1,
              backgroundColor: colors.gray2,
              width: '35%',
            }}
          />
        </View>

        {/* 버튼 */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
            <Image source={require('../../assets/images/icons/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
            <Image source={require('../../assets/images/icons/apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
