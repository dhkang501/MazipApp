import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  name: 'Matzip',
})
  .useReactNative({
    errors: {veto: stackFrame => false},
  })
  .connect();

//   import Reactotron from "reactotron-react-native";
//   import AsyncStorage from "@react-native-async-storage/async-storage";

//   // Reactotron이 AsyncStorage API와 통합되도록 설정
//   Reactotron.setAsyncStorageHandler(AsyncStorage)
//     .configure({
//       name: "React Native Demo", // Reactotron 데스크톱 앱에서 표시될 애플리케이션 이름
//     })
//     .useReactNative({
//       asyncStorage: false, // AsyncStorage와 관련된 더 많은 옵션이 있습니다.
//       networking: {
//         // 네트워킹 기능을 사용하지 않으려면 false로 설정할 수 있습니다.
//         ignoreUrls: /symbolicate/, // 특정 URL을 무시하도록 설정 (symbolicate URL 무시)
//       },
//       editor: false, // 코드 편집과 관련된 더 많은 옵션이 있습니다.
//       errors: { veto: (stackFrame) => false }, // 오류 추적을 비활성화하려면 false로 설정
//       overlay: false, // Reactotron의 오버레이 기능을 비활성화
//     })
//     .connect(); // Reactotron과 연결

//   // Reactotron에 사용자 정의 미들웨어를 추가하는 예시
//   import Reactotron from "reactotron-react-native";

//   const middleware = (tron) => {
//     /* 사용자 정의 플러그인 정의 */
//   };

//   Reactotron.setAsyncStorageHandler(AsyncStorage)
//     .configure({
//       name: "React Native Demo", // Reactotron 데스크톱 앱에서 표시될 애플리케이션 이름
//     })
//     .useReactNative() // React Native용 기본 내장 플러그인 모두 추가
//     .use(middleware) // 사용자 정의 플러그인 추가
//     .connect(); // Reactotron과 연결
