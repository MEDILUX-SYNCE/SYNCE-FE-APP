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

interface AppButtonProps {
  title: string;
  activate: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  type?: ButtonType;
  icon?: React.ReactNode;
}

export const AppButton = ({
  title,
  activate,
  onPress,
  style,
  type,
  icon,
}: AppButtonProps) => {
  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isWhite = type === 'white';

  return (
    <TouchableOpacity
      disabled={!activate}
      onPress={onPress}
      activeOpacity={0.85}
      style={[isOutline ? styles.outlineButton : style]}
    >
      {isOutline ? (
        <View style={[styles.outlineContent]}>
          {icon && <View style={styles.iconWrapper}>{icon}</View>}
          <AppText color="black" weight="medium" size="md">
            {title}
          </AppText>
        </View>
      ) : activate ? (
        <LinearGradient
          colors={['#FF3766', '#F58F95']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, style]}
        >
          <AppText color="white" weight="bold" size="md">
            {title}
          </AppText>
        </LinearGradient>
      ) : (
        <View style={styles.button}>
          <AppText color="white" weight="bold" size="md">
            {title}
          </AppText>
        </View>
      )}

      {/* secondary */}
      {isSecondary && (
        <View style={[styles.secondaryInner, !activate && styles.disabled]}>
          <AppText color="primary1" weight="bold" size="md">
            {title}
          </AppText>
        </View>
      )}

      {/* white */}
      {isWhite && (
        <View style={[styles.whiteInner, !activate && styles.disabled]}>
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
  secondaryInner: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteInner: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 8,
  },
});
