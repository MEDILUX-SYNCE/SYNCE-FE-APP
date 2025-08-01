import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: colors.white,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  stepLine: {
    width: width * 0.125,
    height: 2,
    backgroundColor: colors.whitegray,
  },
  stepDotActive: {
    backgroundColor: colors.primary1,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 12,
  },
  agreementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
    color: colors.black,
  },
  boldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightLabel: {
    color: colors.primary1,
  },
  checkboxBase: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: colors.gray3,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary1,
    borderWidth: 0,
  },
});
