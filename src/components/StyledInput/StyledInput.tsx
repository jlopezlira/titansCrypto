import React from 'react';
import { TextInput } from 'react-native';

const StyledInput = () => {
  return (
    <TextInput
      style={{}}
      placeholder="Placeholder"
      placeholderTextColor="gray"
      onChangeText={() => {}}
      value={''}
      testID="test-id"
    />
  );
};

export default StyledInput;
