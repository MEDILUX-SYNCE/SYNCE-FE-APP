import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalContent: {
    gap: 10,
    padding: 20,
    margin: width * 0.1,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    marginVertical: 12,
  },
});
