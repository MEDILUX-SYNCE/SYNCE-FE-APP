import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topCard: {
    backgroundColor: colors.white,
    borderBottomWidth: 7,
    borderBottomColor: colors.whitegray,
  },
  card: {
    backgroundColor: colors.white,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.whitegray,
  },
});
