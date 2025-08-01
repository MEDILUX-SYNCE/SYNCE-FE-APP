import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from './AppText';
import { colors } from '../theme/color';

type ButtonType = 'fill' | 'outline' | 'secondary' | 'gray' | 'white';
type ButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps {
  title: string;
  activate: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: React.ReactNode;
}

export const AppButton = ({
  title,
  activate,
  onPress,
  style,
  size,
  type,
  icon,
}: AppButtonProps) => {
  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isGray = type === 'gray';
  const isWhite = type === 'white';

  // 반응형 사이즈
  const { width, height } = Dimensions.get('window');

  // 버튼 여백
  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case 'small':
        return { width: 0.15 * width, height: 0.06 * height };
      case 'medium':
        return { width: 0.7 * width, height: 0.06 * height };
      case 'large':
        return { width: 0.9 * width, height: 0.06 * height };
      default:
        return { width: 0.9 * width, height: 0.06 * height };
    }
  };

  return (
    <TouchableOpacity
      disabled={!activate}
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        !isOutline &&
          !isSecondary &&
          !isWhite &&
          !isGray &&
          getSizeStyle() &&
          style,
      ]}
    >
      {/* outline */}
      {isOutline && (
        <View style={[styles.outlineButton, getSizeStyle(), style]}>
          <View style={styles.outlineContent}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}
            <AppText color="black" weight="medium" size="md">
              {title}
            </AppText>
          </View>
        </View>
      )}

      {/* fill */}
      {!isOutline &&
        !isSecondary &&
        !isGray &&
        !isWhite &&
        (activate ? (
          <LinearGradient
            colors={['#FF3766', '#F58F95']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.button, style, , getSizeStyle()]}
          >
            <AppText color="white" weight="bold" size="md">
              {title}
            </AppText>
          </LinearGradient>
        ) : (
          <View style={[styles.button, getSizeStyle()]}>
            <AppText color="white" weight="bold" size="md">
              {title}
            </AppText>
          </View>
        ))}

      {/* secondary */}
      {isSecondary && (
        <View
          style={[
            styles.secondaryButton,
            getSizeStyle(),
            !activate && styles.secondaryDisabled,
            style,
          ]}
        >
          <AppText
            color={activate ? 'primary1' : 'white'}
            weight="bold"
            size="md"
          >
            {title}
          </AppText>
          {icon && <View>{icon}</View>}
        </View>
      )}

      {/* gray */}
      {isGray && (
        <View style={[styles.grayButton, getSizeStyle(), style]}>
          <AppText color="gray4" weight="medium" size="md">
            {title}
          </AppText>
          {icon && <View>{icon}</View>}
        </View>
      )}

      {/* white */}
      {isWhite && (
        <View
          style={[
            styles.whiteInner,
            getSizeStyle(),
            !activate && styles.disabled,
            style,
          ]}
        >
          {icon && <View>{icon}</View>}
          <AppText color="primary1" weight="bold" size="md">
            {title}
          </AppText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gray1,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    borderRadius: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: colors.white,
  },
  outlineContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.redwhite,
  },
  secondaryDisabled: {
    backgroundColor: colors.gray2,
  },
  grayButton: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whitegray,
  },
  whiteInner: {
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  disabled: {
    opacity: 0.5,
  },
  iconWrapper: {
    marginRight: 8,
  },
});
