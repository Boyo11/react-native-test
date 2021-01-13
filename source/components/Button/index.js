import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={props.onPress}>
      <Text style={{color: '#FFFFFF'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Container: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 15,
  },
});
