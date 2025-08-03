import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

// 화면 너비, 높이 가져오기 (페이지 단위 스크롤)
const { width, height } = Dimensions.get('window');

// 스타일
export const styles = StyleSheet.create({
  page: {
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height * 0.12,
  },
  modalContainer: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginVertical: height * 0.1,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: height * 0.1,
    left: 20,
    right: 20,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: height * 0.3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary1,
  },
  inactiveDot: {
    backgroundColor: colors.gray1,
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
  divider: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 12,
  },
});
