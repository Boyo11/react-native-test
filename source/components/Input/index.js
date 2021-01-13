import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
  return (
    <View
      style={[
        styles.container,
        props.danger && {borderColor: 'red', borderWidth: 1},
      ]}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    backgroundColor: '#DFDFDF',
    // backgroundColor: 'red',
    borderRadius: 50,
    overflow: 'hidden',
    padding: 5,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    // backgroundColor: 'purple',
    padding: 0,
  },
});
