import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites screen</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
