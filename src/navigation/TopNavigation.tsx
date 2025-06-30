import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText } from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

type TopNavigationProps = {
  title: string;
  hasBack?: boolean;
  hasDropdown?: boolean;
  hasMenu?: boolean;
  onPressDropdown?: () => void;
  onPressMenu?: () => void;
};

export const TopNavigation = ({
  title,
  hasBack = false,
  hasDropdown = false,
  hasMenu = false,
  onPressDropdown,
  onPressMenu,
}: TopNavigationProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* 왼쪽 (뒤로가기 아이콘) */}
      <View style={styles.left}>
        {hasBack && (
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                Alert.alert('뒤로 갈 수 없습니다.');
              }
            }}
          >
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../assets/images/icons/leftArrow.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* 가운데 (타이틀 + 드롭다운 아이콘) */}
      <View style={styles.center}>
        <AppText size="lg" weight="bold" color="black">
          {title}
        </AppText>
      </View>
      <View>
        {hasDropdown && (
          <TouchableOpacity onPress={onPressDropdown}>
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../assets/images/icons/dropDown.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* 오른쪽 (메뉴 아이콘) */}
      <View style={styles.right}>
        {hasMenu && (
          <TouchableOpacity onPress={onPressMenu}>
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../assets/images/icons/menu.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: width * 0.6,
    alignItems: 'flex-end',
  },
});
