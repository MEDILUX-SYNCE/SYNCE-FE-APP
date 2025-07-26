export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  AccountSearch: undefined;
  Signup: undefined;
  Home: undefined;
  RecordProgress: undefined;
  HospitalSearch: {
    onSelect: (hospitalName: string) => void;
  };
  Notifications: undefined;
};
