// JS/TS 코드를 실행 전에 변환 (RN 필수)
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [ 
    // 환경 변수 사용을 위한 플러그인
    'module:react-native-dotenv'
  ]
};
