import { MD3LightTheme } from 'react-native-paper';
import { colors } from './color';

export const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors, // 기존 색상 복사

    // 앱색으로 덮어씌움
    primary: colors.primary1, // 선택한 날짜 배경
    onPrimary: colors.white, // 선택한 날짜 텍스트
    onSurface: colors.black, // 기본 텍스트 색
    secondaryContainer: colors.primary1, // 오늘 날짜 원 색
  },
};
