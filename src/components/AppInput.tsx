import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { colors } from '../theme/color';
import { fontSizes } from '../theme/fontSizes';
import { fonts } from '../theme/fonts';
import { AppText } from './AppText';

const { width } = Dimensions.get('window');

interface AppInputProps extends TextInputProps {
  // AppIntput 바깥 View 스타일 커스터마이징 해주는 containerStlye
  containerStyle?: StyleProp<ViewStyle>;
  // 에러일 때 테두리 색 바꾸는 isError
  isError?: boolean;
  errorText?: string;
}

export const AppInput = ({
  containerStyle,
  isError = false,
  errorText,
  // TextInput이 지원하는 모든 props 자동으로 받아서 넘기기
  ...textInputProps
}: AppInputProps) => {
  return (
    <View style={containerStyle}>
      <View
        style={[styles.container, isError && styles.inputError, containerStyle]}
      >
        <TextInput
          style={styles.textInput}
          placeholderTextColor={colors.gray3}
          {...textInputProps}
        />
      </View>
      {errorText && (
        <AppText color="primary1" size="xs" weight="regular">
          {errorText}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: width * 0.9,
  },
  container: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.gray1,
  },
  textInput: {
    margin: 8,
    padding: 8,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  inputError: {
    borderColor: colors.primary1,
  },
});
