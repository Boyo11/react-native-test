import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Product from '../../components/Product';
import Icon from 'react-native-vector-icons/Entypo';
import ActionHeader from '../../components/ActionsHeader';

const ProductInCat = (props) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ActionHeader title={route.params.title} />
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContainerStyles}>
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
        <Product navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default ProductInCat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap',
  },
  scrollStyle: {
    width: '100%',
    paddingHorizontal: '5%',
    // paddingVertical: '10%',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
  },
  scrollContainerStyles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
