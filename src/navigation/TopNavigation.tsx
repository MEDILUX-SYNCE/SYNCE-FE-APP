import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';

type TitleSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type TopNavigationProps = {
  title: string;
  titleSize?: TitleSizeType;
  hasCancel: boolean;
  hasBack?: boolean;
  hasDropdown?: boolean;
  hasMore?: boolean;
  onPressDropdown?: () => void;
  onPressMore?: () => void;
};

export const TopNavigation = ({
  title,
  titleSize = 'lg',
  hasCancel = false,
  hasBack = false,
  hasDropdown = false,
  hasMore = false,
  onPressDropdown,
  onPressMore,
}: TopNavigationProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* 왼쪽 (뒤로가기 또는 취소 아이콘) */}
      <View style={styles.left}>
        {hasBack ? (
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
        ) : hasCancel ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../assets/images/icons/cancel.png')}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* 가운데 (타이틀 + 드롭다운 아이콘) */}
      <View style={styles.center}>
        <AppText size={titleSize} weight="bold" color="black">
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

      {/* 오른쪽 (더보기 아이콘) */}
      <View style={styles.right}>
        {hasMore && (
          <TouchableOpacity onPress={onPressMore}>
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
