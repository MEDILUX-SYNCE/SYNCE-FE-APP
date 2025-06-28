import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/color';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>홈 화면입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
