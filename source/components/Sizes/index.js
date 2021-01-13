import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Sizes = (props) => {
  const [active, setActive] = useState();

  const onClick = (i) => {
    setActive(i);
    props.onClickSize(i);
  };

  return (
    <View style={styles.container}>
      {props.sizes.map((e, i) => {
        let indexOfSize = i;
        if (props.nonActive)
          return (
            <View style={[styles.sizeNonActive]} key={i}>
              <Text style={[styles.text, {fontSize: 10}]}>{e}</Text>
            </View>
          );
        else
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                onClick(indexOfSize);
              }}>
              <View
                style={[
                  styles.size,
                  active == i && {backgroundColor: '#707070'},
                ]}>
                <Text style={[styles.text, active == i && {color: '#FFFFFF'}]}>
                  {e}
                </Text>
              </View>
            </TouchableOpacity>
          );
      })}
    </View>
  );
};

export default Sizes;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  size: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeNonActive: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});
