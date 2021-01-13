import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const FavButton = (props) => {
  const [state, setState] = useState(props.filled ? props.filled : false);
  return (
    <TouchableWithoutFeedback onPress={() => setState((Prev) => !Prev)}>
      <View style={styles.container}>
        {state ? (
          <Icon name="heart" color="#E80CBD" size={25} />
        ) : (
          <Icon name="heart-outlined" color="black" size={25} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
