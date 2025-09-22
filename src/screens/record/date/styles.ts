import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../theme/fontSizes';
import { colors } from '../../../theme/color';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: width * 0.9,
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  selectLabel: {
    fontSize: fontSizes.sm,
    color: colors.gray4,
    marginBottom: 24,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    fontSize: fontSizes.xxl,
    fontWeight: 'regular',
    color: colors.black,
    flex: 1,
  },
  calendar: {
    borderTopWidth: 1,
    borderTopColor: colors.gray1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 36,
  },
  reset: {
    fontSize: fontSizes.md,
    color: colors.primary1,
    fontWeight: 'regular',
  },
  cancel: {
    fontSize: fontSizes.md,
    color: colors.gray3,
    fontWeight: 'regular',
  },
  confirm: {
    fontSize: fontSizes.md,
    color: colors.primary1,
    fontWeight: 'regular',
  },
});
