import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Image,
} from 'react-native';
import { AppText } from '../../../components/AppText';
import { TopNavigation } from '../../../navigation/TopNavigation';
import { noticeData } from './data/NoticeCategory';
import { styles } from './styles';

export default function NoticeScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <TopNavigation title="공지사항" hasBack hasCancel={false} />

      {/* 본문 */}
      <ScrollView>
        {noticeData.map(item => (
          <View key={item.id} style={styles.card}>
            <TouchableOpacity
              onPress={() => toggleExpand(item.id)}
              style={styles.header}
              activeOpacity={0.8}
            >
              <AppText color="gray4" size="md" weight="medium">
                {item.title}
              </AppText>
              {expandedId === item.id ? (
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../../assets/images/icons/topArrow.png')}
                />
              ) : (
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../../assets/images/icons/bottomArrow.png')}
                />
              )}
            </TouchableOpacity>
            {expandedId === item.id && (
              <View style={styles.content}>
                <AppText color="gray4" size="sm" weight="medium">
                  {item.content}
                </AppText>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
