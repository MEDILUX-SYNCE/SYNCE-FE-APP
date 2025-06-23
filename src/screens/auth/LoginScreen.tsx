import React, { useEffect } from 'react';
import { AppText } from '../../components/AppText';

export default function LoginScreen({ navigation }: any) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation?.replace?.('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <>
      <AppText>로그인</AppText>
    </>
  );
}
