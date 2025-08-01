import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    borderBottomWidth: 1,
    borderColor: colors.gray1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.whitegray,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
