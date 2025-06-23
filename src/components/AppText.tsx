// 앱 텍스트 컴포넌트

import { Text, TextProps, TextStyle } from "react-native";
import { colors } from "../theme/color";
import { fonts } from "../theme/fonts";
import { fontSizes } from "../theme/fontSizes";

// fonts 객체의 key 이름만 가져와서 문자열 유니언 타입으로 FontWeight에 저장
type FontWeight = keyof typeof fonts;

// fontSizes 객체의 key 이름만 가져와서 문자열 유니언 타입으로 FontSize에 저장
type FontSize = keyof typeof fontSizes;

// colors 객체의 key 이름만 가져와서 문자열 유니언 타입으로 Color에 저장
type Color = keyof typeof colors;

// interface: 객체의 모양을 설명하는 틀 (어떤 props, 속성 등을 가질지 미리 약속)
// TextProps 상속받는 이유: 기존의 <Text> 컴포넌트의 모든 props 물려받기 위함
interface AppTextProps extends TextProps {
  // children: 컴포넌트가 감싸고 있는 내용
  // React.ReactNode: 글자, 컴포넌트, 이미지 등 렌더링 가능한 모든 것을 포함하는 타입
  children?: React.ReactNode;
  weight?: FontWeight;
  size?: FontSize;
  color?: Color;
  style?: TextStyle;
}

export const AppText = ({
  children,
  weight = "regular",
  size = "md",
  color = "black",
  style,
  ...rest
}: AppTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: fonts[weight],
          fontSize: fontSizes[size],
          color: colors[color],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
