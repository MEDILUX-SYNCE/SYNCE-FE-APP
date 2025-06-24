import { StyleSheet, View } from 'react-native';
import { TopNavigation } from '../../navigation/TopNavigation';
import { colors } from '../../theme/color';

export default function SignupScreen() {
  return (
    <View style={styles.screen}>
      <TopNavigation title={'회원가입'} hasBack />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
