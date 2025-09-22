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
import { styles } from './styles';

interface AppInputProps extends TextInputProps {
  isError?: boolean;
  errorText?: string;
}

export const AppInput = ({
  isError = false,
  errorText,
  ...textInputProps
}: AppInputProps) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <View style={[styles.container, isError && styles.inputError]}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={colors.gray3}
          {...textInputProps}
        />
      </View>
      <View style={{ marginTop: 8, marginLeft: 8 }}>
        {errorText && (
          <AppText color="primary1" size="xs" weight="regular">
            {errorText}
          </AppText>
        )}
      </View>
    </View>
  );
};
