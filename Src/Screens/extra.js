import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DateValidationTextInput = () => {
  const [day, setDay] = useState('');
  console.log('day', day);
  const [month, setMonth] = useState('');
  console.log('month', month);
  const [year, setYear] = useState('');
  console.log('year', year);
  const [error, setError] = useState('');

  const handleDayChange = text => {
    // Check that the input is a number
    if (/^\d+$/.test(text)) {
      const dayNum = parseInt(text, 10);
      // Check that the day is within the valid range
      if (dayNum >= 1 && dayNum <= 31) {
        setDay(text);
        setError(''); // Clear any previous error message
      } else {
        setError('Please enter a valid day between 1 and 31');
      }
    } else {
      setError('Please enter a valid number');
    }
  };

  const handleMonthChange = text => {
    // Check that the input is a number
    if (/^\d+$/.test(text)) {
      const monthNum = parseInt(text, 10);
      // Check that the month is within the valid range
      if (monthNum >= 1 && monthNum <= 12) {
        setMonth(text);
        setError(''); // Clear any previous error message
      } else {
        setError('Please enter a valid month between 1 and 12');
      }
    } else {
      setError('Please enter a valid number');
    }
  };

  const handleYearChange = text => {
    // Check that the input is a number
    if (/^\d+$/.test(text)) {
      const yearNum = parseInt(text, 10);
      // Check that the year is within the valid range
      if (yearNum >= 1965 && yearNum <= 2023) {
        setYear(text);
        /// setError(''); // Clear any previous error message
      } else {
        setError('Please enter a valid year between 1900 and 2100');
        // setYear('');
      }
    } else {
      setError('Please enter a valid number');
    }
  };

  const saveDate = async () => {
    try {
      const date = new Date(`${year}-${month}-${day}`);
      await AsyncStorage.setItem('selectedDate', date.toISOString());
      console.log('Date saved successfully');
    } catch (e) {
      console.error('Error saving date:', e);
    }
  };

  return (
    <View>
      <TextInput
        value={day}
        onChangeText={handleDayChange}
        placeholder="DD"
        keyboardType="numeric"
        maxLength={2}
      />
      <TextInput
        value={month}
        onChangeText={handleMonthChange}
        placeholder="MM"
        keyboardType="numeric"
        maxLength={2}
      />
      <TextInput
        value={year}
        onChangeText={handleYearChange}
        placeholder="YYYY"
        keyboardType="numeric"
        maxLength={4}
      />
      {error !== '' && ( // Show error message if input is invalid
        <Text style={{color: 'red'}}>{error}</Text>
      )}
      <Button
        title="Save Date"
        onPress={saveDate}
        disabled={!day || !month || !year}
      />
    </View>
  );
};
export default DateValidationTextInput;
