import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { colors } from '../theme/color';

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  trackWidth?: number;
  trackHeight?: number;
  thumbSize?: number;
};

export const AppSwitch = ({
  value,
  onValueChange,
  trackWidth = 50,
  trackHeight = 30,
  thumbSize = 24,
}: Props) => {
  const toggle = () => onValueChange(!value);

  return (
    <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
      <View
        style={[
          styles.track,
          {
            width: trackWidth,
            height: trackHeight,
            backgroundColor: value ? colors.primary : colors.gray2,
            borderRadius: trackHeight / 2,
          },
        ]}
      >
        <View
          style={[
            styles.thumb,
            {
              width: thumbSize,
              height: thumbSize,
              backgroundColor: value ? colors.white : colors.white,
              transform: [
                {
                  translateX: value ? trackWidth - thumbSize - 3 : 3,
                },
              ],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    justifyContent: 'center',
    padding: 2,
  },
  thumb: {
    position: 'absolute',
    borderRadius: 100,
    top: 3,
  },
});
