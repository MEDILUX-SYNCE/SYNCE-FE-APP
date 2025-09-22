import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
  top: {
    height: '15%',
    flexDirection: 'column',
    backgroundColor: colors.redwhite,
  },
  inputContainer: { padding: 16, gap: 8 },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.redwhite,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },

  recordTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whitegray,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  fixedButton: {
    bottom: 120,
    alignSelf: 'center',
    position: 'absolute',
  },
  infoCard: {
    position: 'absolute',
    top: 65,
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.redwhite3,
    shadowColor: '#FFE2E7',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,
  },
});
