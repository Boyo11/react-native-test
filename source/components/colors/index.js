import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Colors = (props) => {
  const [active, setActive] = useState();

  const onClick = (i) => {
    setActive(i);
    props.onClickColor(i);
  };

  return (
    <View style={styles.container}>
      {props.colors.map((e, i) => {
        let indexOfColor = i;
        if (props.nonActive)
          return (
            <View
              style={[styles.colorNonActive, {backgroundColor: e}]}
              key={i}
            />
          );
        else
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                onClick(indexOfColor);
              }}>
              <View
                style={[
                  styles.color,
                  {backgroundColor: e},
                  active == i && {borderColor: 'black'},
                ]}
              />
            </TouchableOpacity>
          );
      })}
    </View>
  );
};

export default Colors;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'black',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  colorNonActive: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: 'black',
    margin: 5,
  },
});
