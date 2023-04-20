import React, {useState} from 'react';
import {View, TextInput, Button, Text, Alert} from 'react-native';

const DriverConductorNumberCalculator = () => {
  const [dob, setDob] = useState(''); // State to hold the user's date of birth
  const [driverNumber, setDriverNumber] = useState(''); // State to hold the calculated driver number
  const [conductorNumber, setConductorNumber] = useState(''); // State to hold the calculated conductor number

  // Function to calculate the driver and conductor numbers
  const calculateNumbers = () => {
    Alert.alert('hi');
    // getDate(12);
    // const dateOfBirth = new Date(dob); // Convert the user input to a date object

    // Extract the day, month, and year from the date object
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your date of birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={text => setDob(text)}
      />
      <Button title="Calculate" onPress={calculateNumbers()} />
    </View>
  );
};

export default DriverConductorNumberCalculator;
