export type RecordData = {
  id: number;
  image: any;
  title: string;
  content: string;
  tags: string[];
  date: string;
};

export const records = [
  {
    id: 0,
    image: require('../../../assets/images/imgs/eyeRecord.png'),
    title: '수술 5일차 기록',
    content:
      '붓기는 거의 빠졌지만, 라인이 아직은 비대칭으로 느껴진다.' +
      '눈 감을 때 뻣뻣한 느낌이 들고 일부 감각이 무딘 상태다.' +
      '흉터는 희미해지고 있지만 아직 붉은 기운이 남아 있고, 양쪽 라인 높이가 조금 다르다.' +
      '건조함은 여전해서 인공눈물은 계속 사용 중이다.' +
      '세수할 때 따끔하고, 흉터 부위가 살짝 튀어나온 느낌.',
    tags: [
      '피부 패임',
      '피부 울퉁불퉁해짐',
      '비대칭',
      '붓기',
      '멍',
      '통증',
      '열감',
    ],
    date: '2025.05.13・23:10',
  },
  {
    id: 1,
    image: require('../../../assets/images/imgs/eyeRecord.png'),
    title: '수술 3일차 기록',
    content:
      '붓기는 거의 빠졌지만, 라인이 아직은 비대칭으로 느껴진다.' +
      '눈 감을 때 뻣뻣한 느낌이 들고 일부 감각이 무딘 상태다.' +
      '흉터는 희미해지고 있지만 아직 붉은 기운이 남아 있고, 양쪽 라인 높이가 조금 다르다.' +
      '건조함은 여전해서 인공눈물은 계속 사용 중이다.' +
      '세수할 때 따끔하고, 흉터 부위가 살짝 튀어나온 느낌.',
    tags: [
      '피부 처짐',
      '피부 딱딱해짐',
      '피부 패임',
      '피부 울퉁불퉁해짐',
      '비대칭',
    ],
    date: '2025.05.13・23:10',
  },
];
