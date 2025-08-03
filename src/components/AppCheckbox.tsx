import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/color';
import { AppText } from './AppText';
import { styles } from '../screens/onboarding/styles';

export const AppCheckbox = ({
  checked,
  onPress,
  label,
  bold,
  highlight,
}: {
  checked: boolean;
  onPress: () => void;
  label: React.ReactNode;
  bold?: boolean;
  highlight?: boolean;
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.agreementItem}>
      <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
        {checked && <MaterialIcons name="check" size={16} color="white" />}
      </View>
      <AppText
        style={[
          styles.label,
          bold && styles.boldLabel,
          {
            color: highlight
              ? checked
                ? colors.primary1
                : colors.gray3
              : colors.black,
            textDecorationLine: highlight && checked ? 'underline' : 'none',
          },
        ]}
      >
        {label}
      </AppText>
    </View>
  </TouchableOpacity>
);
