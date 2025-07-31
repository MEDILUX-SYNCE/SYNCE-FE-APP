/* eslint-disable @typescript-eslint/no-unused-vars */
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

type ButtonType = 'fill' | 'outline' | 'secondary' | 'white';
<<<<<<< HEAD
type ButtonSize = 'large' | 'medium' | 'small';
=======
type ButtonSize = 'small' | 'medium' | 'large';
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825

interface AppButtonProps {
  title: string;
  activate: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: React.ReactNode;
  size?: ButtonSize;
}

export const AppButton = ({
  title,
  activate,
  onPress,
  style,
  size,
  type,
  icon,
  size = 'large',
}: AppButtonProps) => {
  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isWhite = type === 'white';

<<<<<<< HEAD
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

=======
  // 반응형 사이즈
  const { width, height } = Dimensions.get('window');

  // 버튼 여백
  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case 'small':
        return { width: 0.2 * width, height: 0.06 * height };
      case 'medium':
        return { width: 0.7 * width, height: 0.06 * height };
      case 'large':
        return { width: 0.9 * width, height: 0.06 * height };
      default:
        return { width: 0.9 * width, height: 0.06 * height };
    }
  };

>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
  return (
    <TouchableOpacity
      disabled={!activate}
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        !isOutline && !isSecondary && !isWhite && getSizeStyle() && style,
      ]}
    >
      {/* outline */}
      {isOutline && (
<<<<<<< HEAD
        <View style={[styles.outlineButton, sizeStyle, style]}>
=======
        <View style={[styles.outlineButton, getSizeStyle(), style]}>
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
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
<<<<<<< HEAD
            style={[styles.button, sizeStyle, style]}
=======
            style={[styles.button, style, , getSizeStyle()]}
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
          >
            <AppText color="white" weight="bold" size="md">
              {title}
            </AppText>
          </LinearGradient>
        ) : (
<<<<<<< HEAD
          <View style={[styles.button, sizeStyle, style]}>
=======
          <View style={[styles.button, getSizeStyle()]}>
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
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
<<<<<<< HEAD
            sizeStyle,
=======
            getSizeStyle(),
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
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
<<<<<<< HEAD
=======

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
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
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
    flexDirection: 'row',
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
});
