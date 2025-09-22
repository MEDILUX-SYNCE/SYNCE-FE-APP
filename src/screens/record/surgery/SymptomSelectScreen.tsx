import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useState } from 'react';
import { TopNavigation } from '../../../navigation/TopNavigation';
import { AppText } from '../../../components/AppText';
import { AppButton } from '../../../components/AppButton';
import { colors } from '../../../theme/color';
import { SURGERY_CATEGORIES } from './data/SurgeryCategories';

type Props = {
  visible: boolean;
  selected: string[];
  onClose: () => void;
  onConfirm: (selected: string[]) => void;
};

export default function SymptomSelectScreen({
  visible,
  selected,
  onClose,
  onConfirm,
}: Props) {
  // 카테고리 확장 상태 관리
  const [expanded, setExpanded] = useState<string | null>(null);
  // 하위 카테고리의 선택 상태를 관리
  const [subExpanded, setSubExpanded] = useState<Record<string, boolean>>({});
  const [selectedItems, setSelectedItems] = useState<string[]>(selected);

  const toggleCategory = (name: string) => {
    setExpanded(expanded === name ? null : name);
  };

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prev => prev.filter(v => v !== item));
    } else {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        {/* 헤더 */}
        <TopNavigation title="증상 선택" hasBack hasCancel={false} />

        {/* 내용 */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* 버튼 */}
          <AppButton
            title={'이전 증상 불러오기'}
            icon={
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../../assets/images/icons/plus.png')}
              />
            }
            type="outline"
            onPress={() => {}}
            activate={false}
          />

          {SURGERY_CATEGORIES.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
              {/* 카테고리 타이틀 */}
              <TouchableOpacity
                onPress={() => toggleCategory(category.name)}
                style={styles.categoryItem}
              >
                <AppText size="md" weight="bold">
                  {category.name}
                </AppText>
                <AppText size="md">
                  {expanded === category.name ? (
                    <Image
                      source={require('../../../assets/images/icons/topArrow.png')}
                      style={{ width: 24, height: 24 }}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/images/icons/bottomArrow.png')}
                      style={{ width: 24, height: 24 }}
                    />
                  )}
                </AppText>
              </TouchableOpacity>

              {/* 펼쳐진 경우 하위 항목 */}
              {expanded === category.name && (
                <View style={{ gap: 8 }}>
                  {category.children.map((child, index) => {
                    if (typeof child === 'string') {
                      // 단순 항목 (e.g. 기타 수술)
                      return (
                        <TouchableOpacity
                          key={`${category.name}-${child}`}
                          onPress={() => toggleItem(child)}
                          style={[
                            styles.subItem,
                            selectedItems.includes(child) &&
                              styles.subItemSelected,
                          ]}
                        >
                          <AppText
                            size="sm"
                            color={
                              selectedItems.includes(child)
                                ? 'primary'
                                : 'black'
                            }
                          >
                            {child}
                          </AppText>
                        </TouchableOpacity>
                      );
                    }

                    // 종류가 하위 카테고리인 경우
                    const isSubExpanded = subExpanded[child.name] || false;

                    // 하위 카테고리 세부 항목
                    return (
                      <View key={`${category.name}-${child.name}`}>
                        {/* 중간 카테고리: 쌍꺼풀, 트임 등 */}
                        <TouchableOpacity
                          style={styles.categoryItem}
                          onPress={() =>
                            setSubExpanded(prev => ({
                              ...prev,
                              [child.name]: !isSubExpanded,
                            }))
                          }
                        >
                          <AppText
                            size="sm"
                            weight="medium"
                            style={{ marginVertical: 4 }}
                          >
                            {child.name}
                          </AppText>
                          <AppText size="md">
                            {expanded === category.name ? (
                              <Image
                                source={require('../../../assets/images/icons/bottomArrow.png')}
                                style={{ width: 24, height: 24 }}
                              />
                            ) : (
                              <Image
                                source={require('../../../assets/images/icons/topArrow.png')}
                                style={{ width: 24, height: 24 }}
                              />
                            )}
                          </AppText>
                        </TouchableOpacity>

                        {/* 세부 항목들 */}
                        {isSubExpanded && (
                          <View style={styles.subItemContainer}>
                            {child.subItems.map(sub => (
                              <TouchableOpacity
                                key={`${category.name}-${child.name}-${sub}`}
                                onPress={() => toggleItem(sub)}
                                style={[
                                  styles.subItem,
                                  selectedItems.includes(sub) &&
                                    styles.subItemSelected,
                                ]}
                              >
                                <AppText
                                  size="sm"
                                  color={
                                    selectedItems.includes(sub)
                                      ? 'primary1'
                                      : 'gray4'
                                  }
                                >
                                  {sub}
                                </AppText>
                              </TouchableOpacity>
                            ))}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* 푸터 */}
        <View style={styles.footer}>
          <AppButton
            title="초기화"
            type="white"
            size="small"
            activate={selectedItems.length > 0}
            onPress={() => setSelectedItems([])}
            icon={
              <Image
                source={require('../../../assets/images/icons/refresh.png')}
                style={{ width: 24, height: 24 }}
              />
            }
          />
          <AppButton
            title="확인"
            size="medium"
            activate={selectedItems.length > 0}
            onPress={() => onConfirm(selectedItems)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: { flex: 1, backgroundColor: colors.white },
  content: { padding: 16, gap: 12 },
  categoryContainer: { marginBottom: 12 },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingVertical: 16,
  },
  subItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingVertical: 16,
  },
  subItem: {
    backgroundColor: colors.whitegray,
    color: colors.gray4,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  subItemSelected: {
    backgroundColor: colors.redwhite,
    color: colors.primary1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
