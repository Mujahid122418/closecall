import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './style';
import {SaveSidAndToken} from '../api/api';
import {useMutation} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowToast} from '../../utils/ShowToast';
import {WebView} from 'react-native-webview';

export default function TwilioSettings() {
  const [sid, handleSidChange] = useState('');
  const [token, handleTokenChange] = useState('');
  const {
    data: SaveToken,
    isLoading,
    isError,
    error,
    mutate,
  } = useMutation(SaveSidAndToken);
  useEffect(() => {
    console.log('SaveToken', SaveToken);
    if (SaveToken?.success == false) {
      alert(SaveToken?.message);
      //  ShowToast('Error', 'Error while downloading file', 'error');
    } else if (SaveToken?.success == true) {
    }
  }, [SaveToken]);
  const saveSidAndToken = async () => {
    if (!sid) {
      ShowToast('Error', 'Please enter Twilio sid', 'error');
    } else if (!token) {
      ShowToast('Error', 'Please enter Twilio token', 'error');
    } else {
      try {
        let user = await AsyncStorage.getItem('User');
        user = JSON.parse(user);
        console.log('user get', user);
        let send = {
          twilio_sid: sid,
          twilio_token: token,
          user_id: user?.id,
        };
        console.log('save ', send);
        mutate(send);
      } catch (error) {
        console.log('error', error);
      }
    }
  };
  return (
    <View>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Enter Twilio sid and token</Text>
        <View style={{width: '100%', marginBottom: 30}}>
          <Text style={[styles.text_footer, {color:'black'}]}>Twilio Sid </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Twilio Sid"
              placeholderTextColor="#666666"
              style={[styles.textInput, {color:'black', borderWidth:0.5 , borderColor:'#666666' , borderRadius:10}]}
              autoCapitalize="none"
              onChangeText={val => handleSidChange(val)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                color:'black'
              },
            ]}>
            Twilio Token
          </Text>

          <TextInput
            placeholder="Your Twilio Token"
            placeholderTextColor="#666666"
            style={[styles.textInput, {color:'black' , borderWidth:0.5 , borderColor:'#666666' , borderRadius:10}]}
            autoCapitalize="none"
            onChangeText={val => handleTokenChange(val)}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'flex-end',
            width: '100%',
          }}>
          {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>cancel </Text>
            </Pressable> */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => saveSidAndToken()}>
            <Text style={styles.textStyle}>save </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
