import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/color';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  categoryButton: {
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  articleCard: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 1,
  },
  thumbnail: {
    width: width - 32,
    height: 148,
    resizeMode: 'cover',
  },
});
