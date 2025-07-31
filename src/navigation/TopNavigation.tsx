/* eslint-disable react-native/no-inline-styles */
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TopNavigationProps = {
  title: string;
  hasCancel: boolean;
  hasBack?: boolean;
  hasDropdown?: boolean;
  onPressDropdown?: () => void;
  backIconType?: 'arrow' | 'cancel';
};

export const TopNavigation = ({
  title,
  hasCancel = false,
  hasBack = false,
  hasDropdown = false,
  onPressDropdown,
  backIconType,
}: TopNavigationProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const backIconSource =
    backIconType === 'cancel'
      ? require('../assets/images/icons/cancel.png')
      : require('../assets/images/icons/leftArrow.png');

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
            <Image style={{ width: 32, height: 32 }} source={backIconSource} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  container: {
    margin: 20,
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
});
