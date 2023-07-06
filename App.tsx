/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, LogBox
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/login/Login';
import Signup from './src/screens/signup/Signup';
import SplashScreen from './src/screens/SplashScreen';
import Navigation from './src/navigation/Navigation';

import {QueryClient, QueryClientProvider} from 'react-query';
import Dashboard from './src/screens/Dashboard/Dashboard';

import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/ShowToast';
// import messaging from '@react-native-firebase/messaging';
const queryClient = new QueryClient();
const ignoreWarns = [
  'VirtualizedLists should never be nested inside plain ScrollViews',
];
function App(): JSX.Element {
  // LogBox.ignoreLogs(ignoreWarns);
  // console.disableYellowBox = true;

//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, []);


// useEffect(()=>{
// // Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
// },[])


  return (
    <QueryClientProvider client={queryClient}>
      <View style={{flex: 1}}>
        
          <Navigation />
        
        <Toast config={toastConfig} style={{zIndex: 9999}} />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
