import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../theme/fontSizes';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    padding: 20,
  },
  resultItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hospitalName: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.gray4,
  },
  hospitalAddr: {
    fontSize: fontSizes.sm,
    fontWeight: 'medium',
    color: colors.gray3,
    marginTop: 4,
  },
  selectBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: colors.whitegray,
  },
  selectText: {
    fontSize: fontSizes.sm,
    color: colors.gray4,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.gray3,
  },
});
