import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from './AppText';

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

export const AppButton = ({ title, onPress, style }: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
