import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';

const MergeStates = () => {
  const [state1, setState1] = useState(['']);
  // const [state2, setState2] = useState('');
  // const [mergedState, setMergedState] = useState('');

  const updateState1 = value => {
    setNumbers(value);
  };

  // const updateState2 = value => {
  //   setState2(value);
  // };

  // const mergeStrings = () => {
  //   const mergedString = state1 + ' ' + state2;
  //   setMergedState(mergedString);
  // };

  // useEffect(() => {
  //   mergeStrings();
  // }, [state1, state2]);

  // Initialize the state with an array of numbers
  const [numbers, setNumbers] = useState(['']);

  // Calculate the sum of the numbers using the reduce method
  const sum = numbers.reduce(item => item[0] + item[1]);

  // Display the sum
  console.log(sum); // 15

  return (
    <View>
      <TextInput
        style={{backgroundColor: 'red', borderWidth: 1}}
        value={numbers}
        onChangeText={updateState1}
      />
      {/* <TextInput value={state2} onChangeText={updateState2} /> */}
      {/* <Text>Merged state: {state1}</Text> */}
    </View>
  );
};

export default MergeStates;
