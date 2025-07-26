/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from './AppText';
import { colors } from '../theme/color';

type ButtonType = 'fill' | 'outline' | 'secondary' | 'white';
type ButtonSize = 'large' | 'medium' | 'small';

interface AppButtonProps {
  title: string;
  activate: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  type?: ButtonType;
  icon?: React.ReactNode;
  size?: ButtonSize;
}

export const AppButton = ({
  title,
  activate,
  onPress,
  style,
  type,
  icon,
  size = 'large',
}: AppButtonProps) => {
  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isWhite = type === 'white';

  const getSizeStyle = (size: ButtonSize): ViewStyle => {
    switch (size) {
      case 'small':
        return { width: 70, height: 48 };
      case 'medium':
        return { width: 240, height: 48 };
      case 'large':
      default:
        return { width: 350, height: 48 };
    }
  };

  const sizeStyle = getSizeStyle(size);

  return (
    <TouchableOpacity
      disabled={!activate}
      onPress={onPress}
      activeOpacity={0.85}
      style={[!isOutline && !isSecondary && !isWhite && style]}
    >
      {/* outline */}
      {isOutline && (
        <View style={[styles.outlineButton, sizeStyle, style]}>
          <View style={styles.outlineContent}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}
            <AppText color="black" weight="medium" size="md">
              {title}
            </AppText>
          </View>
        </View>
      )}

      {/* white */}
      {isWhite && (
        <View
          style={[
            styles.whiteInner,
            sizeStyle,
            !activate && styles.disabled,
            style,
          ]}
        >
          <View style={styles.outlineContent}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}
            <AppText color="primary1" weight="bold" size="md">
              {title}
            </AppText>
          </View>
        </View>
      )}

      {/* fill */}
      {!isOutline &&
        !isSecondary &&
        !isWhite &&
        (activate ? (
          <LinearGradient
            colors={['#FF3766', '#F58F95']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.button, sizeStyle, style]}
          >
            <AppText color="white" weight="bold" size="md">
              {title}
            </AppText>
          </LinearGradient>
        ) : (
          <View style={[styles.button, sizeStyle, style]}>
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
            sizeStyle,
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
          {icon && <View style={styles.iconWrapperRight}>{icon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gray1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    borderRadius: 24,
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
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.redwhite,
  },
  secondaryDisabled: {
    backgroundColor: colors.gray2,
  },
  whiteInner: {
    borderRadius: 16,
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
  iconWrapperRight: {
    marginLeft: 8,
  },
});
