import { ArticleType } from '../screens/article/data/ArticleCategories';

// Stack 전역 네비게이션 (앱 전체에서의 흐름 관리용)
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  AccountSearch: undefined;
  Signup: undefined;
  Home: undefined;
  RecordProgress: undefined;
  RecordReview: undefined;
  HospitalSearch: {
    onSelect: (hospitalName: string) => void;
  };
  Record: undefined;
  Notifications: undefined;
  ArticleDetail: { article: ArticleType };
  Account: undefined;
  Password: undefined;
  NewPassword: undefined;
  Notice: undefined;
  Alert: undefined;
};
