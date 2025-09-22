import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 16,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  left: {
    alignItems: 'flex-start',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  right: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
});
