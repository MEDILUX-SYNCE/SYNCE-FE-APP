import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// 각 화면에 paddingTop 적용 (자동 inset 반영)
export default function AppLayout({ children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top, // 상태바 공간 확보
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
