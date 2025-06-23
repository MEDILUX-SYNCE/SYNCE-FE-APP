// colors 객체 생성

export const grayscale = {
  black: '#000000',
  gray4: '#4B515B',
  gray3: '#ADB1BA',
  gray2: '#DCDEE3',
  gray1: '#E5E6EB',
  whitegrey: '#F2F3F7',
  white: '#FFFFFF',
};

export const whitepink = {
  redwhite3: '#FFD4D4',
  redwhite2: '#FFE0E0',
  redwhite: '#FFF1F1',
};

export const primary = {
  primary: '#FF7C9B',
  primary1: '#FF3766',
  primary2: '#EB2352',
  primary3: '#E11948',
};

export const status = {
  hover: '#3557FF',
  error: '#FF003C',
  errorDarkmode: '#FF6378',
};

// ... (전개 연산자: spread operator) : 여러 객체를 하나로 병합
export const colors = {
  ...grayscale,
  ...whitepink,
  ...primary,
  ...status,
};
