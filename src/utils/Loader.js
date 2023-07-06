import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {StyleSheet} from 'react-native';
import {BallIndicator} from 'react-native-indicators';

export const Loader = loading => {
  return (
    <Spinner
      visible={loading.loading}
      textContent={'loading...'}
      textStyle={styles.spinnerTextStyle}
      animation="fade"
    />
  );
};
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
