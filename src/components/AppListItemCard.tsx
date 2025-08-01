import { Dimensions, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppText } from './AppText';
import { colors } from '../theme/color';

const { width } = Dimensions.get('window');

type AppListItemCardProps = {
  primaryTitle?: string;
  title?: string;
  subTitle?: string;
  items: {
    icon: React.ReactNode;
    text: string;
    subText?: string;
    rightIcon?: React.ReactNode;
  }[];
  borderColor?: string;
  shadowColor?: string;
  padding?: number;
  onPress?: () => void;
};

export const AppListItemCard = ({
  primaryTitle,
  title,
  subTitle,
  items,
  borderColor,
  shadowColor,
  padding,
  onPress,
}: AppListItemCardProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        padding: 16,
      }}
    >
      {/* 타이틀과 서브타이틀이 모두 있을 경우에만 렌더링 */}
      {title && subTitle && (
        <View
          style={{
            gap: 8,
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingVertical: 8,
          }}
        >
          {/* 타이틀 */}
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <AppText color="primary1" size="lg" weight="bold">
              {primaryTitle}
            </AppText>
            <AppText color="black" size="lg" weight="bold">
              {title}
            </AppText>
          </View>
          {/* 서브타이틀 */}
          <AppText color="gray4" size="sm" weight="medium">
            {subTitle}
          </AppText>
        </View>
      )}

      {/* 리스트 전체 */}
      <View
        style={{
          gap: 16,
          width: width * 0.9,
          padding: padding || 16,
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: colors.white,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: borderColor || colors.redwhite3,
          shadowColor: shadowColor || '#FFE2E7',
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 10,
        }}
      >
        {items.map(({ icon, text, subText, rightIcon }, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
              width: '100%',
            }}
          >
            {/* 왼쪽 icon + subText */}
            <View
              style={{ gap: 16, flexDirection: 'row', alignItems: 'center' }}
            >
              <View>{icon}</View>
              <View style={{ gap: 3, flexDirection: 'column' }}>
                <AppText color="gray4" size="md" weight="medium">
                  {text}
                </AppText>
                {subText && (
                  <AppText color="gray3" size="sm" weight="medium">
                    {subText}
                  </AppText>
                )}
              </View>
            </View>

            {/* 오른쪽 아이콘 */}
            <TouchableOpacity onPress={onPress}>
              {rightIcon && <View>{rightIcon}</View>}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};
