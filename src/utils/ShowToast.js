import {View, Text} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';


export const ShowToast = (msg1, msg2, type) => {
  Toast.show({
    type: type,
    text1: msg1,
    text2: msg2,
    visibilityTime: 5000,
  });
};
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: ({text1, text2}) => (
    <View
      style={{
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        zIndex: 9999,
      }}>
      <Text
        style={{
          color: 'green',
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        {text1}
      </Text>
      <Text style={{color: "black"}}>{text2}</Text>
    </View>
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: ({text1, text2}) => (
    <View
      style={{
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        zIndex: 9999,
      }}>
      <Text
        style={{
          color: 'red',
          fontSize: 14,
          fontWeight: 'bold',
          zIndex: 9999,
        }}>
        {text1}
      </Text>
      <Text style={{color: "black"}}>{text2}</Text>
    </View>
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({text1, text2, props}) => (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <Text style={{color: 'black'}}>{text1}</Text>
      <Text>{text2}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};
