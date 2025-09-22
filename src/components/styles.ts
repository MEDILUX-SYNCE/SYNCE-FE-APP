import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../theme/color';
import { fontSizes } from '../theme/fontSizes';
import { fonts } from '../theme/fonts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // AppInput
  container: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.gray1,
  },
  textInput: {
    margin: 8,
    padding: 8,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  inputError: {
    borderColor: colors.primary1,
  },

  // AppButton
  button: {
    gap: 8,
    flexDirection: 'row',
    backgroundColor: colors.gray1,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    borderRadius: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: colors.white,
  },
  outlineContent: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.redwhite,
  },
  secondaryDisabled: {
    backgroundColor: colors.gray2,
  },
  grayButton: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whitegray,
  },
  blackButton: {
    gap: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  whiteInner: {
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  disabled: {
    opacity: 0.5,
  },
  iconWrapper: {
    marginRight: 8,
  },

  // AppSwitch
  track: {
    justifyContent: 'center',
    padding: 2,
  },
  thumb: {
    position: 'absolute',
    borderRadius: 100,
    top: 3,
  },

  // CustomStyledDatePicker
  overlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  Pickercontainer: {
    width: width * 0.9,
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 16,
  },
  calendarWrapper: {
    minHeight: height * 0.65,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  buttonRight: {
    flexDirection: 'row',
  },

  // SurgerySelectModal
  modal: { flex: 1, backgroundColor: colors.white },
  content: { padding: 16 },
  categoryContainer: { marginBottom: 16 },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderBottomColor: colors.gray1,
  },
  subCategoryContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  subCategoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  subItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginVertical: 4,
    paddingVertical: 10,
  },
  subItem: {
    backgroundColor: colors.whitegray,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  subItemSelected: {
    color: colors.primary1,
    backgroundColor: colors.redwhite,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  arrowContainer: {
    width: 32,
    height: 32,
  },
});
