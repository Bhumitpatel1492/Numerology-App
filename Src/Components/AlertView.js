import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import fonts from '../Utils/Fonts';

export function AlertView(props) {
  const {showAlert, onDismiss, title = '', message, onConfirmPressed} = props;

  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showCancelButton={false}
      showConfirmButton={true}
      confirmText={'OK'}
      confirmButtonColor={'#0096A5'}
      onConfirmPressed={onConfirmPressed}
      onDismiss={onDismiss}
      confirmButtonStyle={{
        width: 140,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
      }}
      confirmButtonTextStyle={{
        color: '#FFFFFF',
        textAlign: 'center',
        // fontWeight: '400',
        fontSize: 14,
        fontFamily: fonts.ATEB,
      }}
      titleStyle={{
        color: 'Red',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 19,
        fontFamily: fonts.ATEB,
      }}
      messageStyle={{
        color: 'black',
        textAlign: 'center',
        // fontWeight: '400',
        fontSize: 14,
        fontFamily: fonts.ATEB,
      }}
      contentContainerStyle={{
        width: '75%',
        justifyContent: 'center',
      }}
    />
  );
}
