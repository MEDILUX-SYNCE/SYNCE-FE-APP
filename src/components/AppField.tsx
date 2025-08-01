import { Image, View } from 'react-native';
import { AppText } from './AppText';

type AppFieldProps = {
  text: string;
  content?: string;
  icon?: React.ReactNode;
};

export const AppField = ({ text, content, icon }: AppFieldProps) => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <AppText color="black" size="md" weight="medium">
          {text}
        </AppText>
        {content && (
          <AppText color="gray3" size="md" weight="medium">
            {content}
          </AppText>
        )}
        {icon && <View>{icon}</View>}
      </View>
    </View>
  );
};
