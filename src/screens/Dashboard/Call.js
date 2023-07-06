import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {PermissionsAndroid, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import { check, PERMISSIONS, request } from 'react-native-permissions';

export default function Call() {
  // useEffect(() => {
  //   const requestPermissions = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.requestMultiple([
  //         PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
  //         PermissionsAndroid.PERMISSIONS.ANSWER_PHONE_CALLS,
  //       ]);
  //       console.log(granted);
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   };

  //   const handlePhoneCall = (event) => {
  //     const url = event.url;
  //     if (url.startsWith('tel:')) {
  //       // Handle phone call event here
  //       // For example, you can open the device's default dialer
  //       Linking.openURL(url);
  //     }
  //   };

  //   requestPermissions();

  //   // Add an event listener to intercept phone call events
  //   Linking.addEventListener('url', handlePhoneCall);

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     Linking.removeEventListener('url', handlePhoneCall);
  //   };
  // }, []);
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
       allowsInlineMediaPlayback={true}
       mediaPlaybackRequiresUserAction={true}
     
        source={{uri: 'https://vitesol.net/hazii/closecall/index.php?id=4'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        useWebKit={true}
      />
    </SafeAreaView>
  );
}
