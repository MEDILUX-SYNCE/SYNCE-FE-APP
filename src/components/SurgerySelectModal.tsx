import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { AppText } from './AppText';
import { AppButton } from './AppButton';
import { colors } from '../theme/color';
import { TopNavigation } from '../navigation/TopNavigation';
import { useState } from 'react';
import { styles } from './styles';

type Props = {
  visible: boolean;
  selected: string[];
  onClose: () => void;
  onConfirm: (selected: string[]) => void;
};

export default function SurgerySelectModal({
  visible,
  selected,
  onConfirm,
}: Props) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>(selected);

  const toggleCategory = (name: string) => {
    setExpandedCategory(expandedCategory === name ? null : name);
    setExpandedSub(null); // 카테고리 바뀌면 2차 초기화
  };

  const toggleSub = (name: string) => {
    setExpandedSub(expandedSub === name ? null : name);
  };

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prev => prev.filter(v => v !== item));
    } else {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  const SURGERY_CATEGORIES = [
    {
      name: '눈',
      children: [
        {
          name: '쌍꺼풀',
          children: [
            '자연유착 쌍꺼풀',
            '매몰 쌍커풀',
            '절개 쌍꺼풀',
            '부분절개 쌍꺼풀',
          ],
        },
        {
          name: '트임',
          children: ['앞트임', '뒤트임', '밑트임', '몽고트임', '트임복원'],
        },
        {
          name: '눈매교정',
          children: ['절개 눈매교정', '비절개 눈매교정'],
        },
        {
          name: '눈모양교정',
          children: [
            '눈밑지방재배치',
            '상안검',
            '하안검',
            '눈썹거상',
            '눈밑지방재배치',
          ],
        },
        {
          name: '눈재수술',
          children: [
            '쌍꺼풀 눈재수술',
            '트임 눈재수술',
            '눈매교정 눈재수술',
            '눈모양교정 눈재수술',
          ],
        },
      ],
    },
    {
      name: '코',
      children: [
        {
          name: '콧대',
          children: ['콧대(자가조직)', '콧대(보형물)', '코절골술'],
        },
        {
          name: '코끝',
          children: ['콧끝(자가조직)', '콧끝(보형물)', '코길이연장'],
        },
        {
          name: '콧볼',
          children: ['비절개콧볼', '내측절개 콧볼'],
        },
        {
          name: '기능코',
          children: [
            '비염/축농증 기능코',
            '비밸브협착 기능코',
            '비중격만곡 기능코',
          ],
        },
        {
          name: '코재수술',
          children: [
            '콧대 코재수술',
            '코끝 재수술',
            '콧볼 코재수술',
            '기능코 코재수술',
          ],
        },
      ],
    },
    {
      name: '지방흡입/이식',
      children: [
        {
          name: '바디지방흡입',
          children: [
            '복부 바디지방흡입',
            '팔 바디지방흡입',
            '허벅지 바디지방흡입',
            '무릎/종아리/발목 바디지방흡입',
            '엉덩이 바디지방흡입',
            '승모근/쇄골/등 바디지방흡입',
            '옆구리/러브핸들 바디지방흡입',
            '가슴 바디지방흡입',
            '겨드랑이/부유방 바디지방흡입',
            '전신 바디지방흡입',
          ],
        },
        {
          name: '얼굴지방흡입',
          children: [
            '풀페이스 얼굴지방흡입',
            '이마/미간 얼굴지방흡입',
            '볼/광대 얼굴지방흡입',
            '턱 얼굴지방흡입',
            '팔자 얼굴지방흡입',
          ],
        },
        {
          name: '바디지방이식',
          children: [
            '가슴 바디지방이식',
            '엉덩이 바디지방이식',
            '종아리 바디지방이식',
          ],
        },
        {
          name: '얼굴지방이식',
          children: [
            '가슴 풀페이스 얼굴지방이식',
            '이마/미간 얼굴지방이식',
            '볼/광대 얼굴지방이식',
            '눈 얼굴지방이식',
            '턱 얼굴지방이식',
            '관자놀이 얼굴지방이식',
            '팔자 얼굴지방이식',
            '입술 얼굴지방이식',
          ],
        },
      ],
    },
    {
      name: '안면윤관/양악',
      children: [
        {
          name: '광대',
          children: ['광대확대(보형물)', '광대 축소'],
        },
        {
          name: '윤곽',
          children: ['사각턱', '턱끝', '이중턱', '복합안면V라인', '안면거상'],
        },
        {
          name: '안면윤곽재수술',
          children: [
            '광대 안면윤곽재수술',
            '윤곽 안면윤곽재수술',
            '이마 안면윤곽재수술',
            '양악 안면윤곽재수술',
          ],
        },
      ],
    },
    {
      name: '가슴',
      children: [
        {
          name: '가슴모양교정',
          children: ['가슴확대(보형물)'],
        },
        {
          name: '유두/유륜',
          children: ['함몰유두', '유두/유륜축소'],
        },
        {
          name: '가슴재수술',
          children: ['가슴모양교정 가슴재수술', '유두/유륜 가슴재수술'],
        },
      ],
    },
    {
      name: '기타',
      children: [
        {
          name: '기타',
          children: [
            '여성성형',
            '바디거상',
            '입술성형',
            '인중성형',
            '팔자성형',
            '보조개성형',
            '엉덩이성형',
            '귀성형',
            '귀성형',
          ],
        },
      ],
    },
  ];

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <TopNavigation title="수술 종류 선택" hasBack hasCancel={false} />
        <ScrollView contentContainerStyle={styles.content}>
          {SURGERY_CATEGORIES.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
              {/* 카테고리 */}
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => toggleCategory(category.name)}
              >
                <AppText weight="bold">{category.name}</AppText>
                <AppText>
                  {expandedCategory === category.name ? (
                    <Image
                      source={require('../assets/images/icons/topArrow.png')}
                      style={styles.arrowContainer}
                    />
                  ) : (
                    <Image
                      source={require('../assets/images/icons/bottomArrow.png')}
                      style={styles.arrowContainer}
                    />
                  )}
                </AppText>
              </TouchableOpacity>

              {/* 1차 항목 */}
              {expandedCategory === category.name && (
                <View>
                  {category.children.map(sub => (
                    <View key={sub.name} style={styles.subCategoryContainer}>
                      <TouchableOpacity
                        style={styles.subCategoryItem}
                        onPress={() => toggleSub(sub.name)}
                      >
                        <AppText>{sub.name}</AppText>
                        <AppText>
                          {expandedSub === sub.name ? (
                            <Image
                              source={require('../assets/images/icons/topArrow.png')}
                              style={styles.arrowContainer}
                            />
                          ) : (
                            <Image
                              source={require('../assets/images/icons/bottomArrow.png')}
                              style={styles.arrowContainer}
                            />
                          )}
                        </AppText>
                      </TouchableOpacity>

                      {/* 2차 항목 */}
                      {expandedSub === sub.name && (
                        <View style={styles.subItemContainer}>
                          {sub.children.map(item => (
                            <TouchableOpacity
                              key={item}
                              onPress={() => toggleItem(item)}
                              style={[
                                styles.subItem,
                                selectedItems.includes(item) &&
                                  styles.subItemSelected,
                              ]}
                            >
                              <AppText
                                color={
                                  selectedItems.includes(item)
                                    ? 'primary'
                                    : 'black'
                                }
                              >
                                {item}
                              </AppText>
                            </TouchableOpacity>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* 푸터 */}
        <View style={styles.footer}>
          <AppButton
            title="초기화"
            size="small"
            type="white"
            activate
            onPress={() => setSelectedItems([])}
            icon={
              <Image
                source={require('../assets/images/icons/refresh.png')}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            }
          />
          <AppButton
            title="확인"
            activate={selectedItems.length > 0}
            size="medium"
            onPress={() => onConfirm(selectedItems)}
          />
        </View>
      </View>
    </Modal>
  );
}
