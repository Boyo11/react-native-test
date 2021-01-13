import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FavButton from '../FavButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Product = (props) => {
  const image = {
    uri:
      'https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg',
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.push('ProductScreen')}
        style={styles.card}>
        <Image source={image} style={styles.imageStyle} />
      </TouchableOpacity>
      <View style={styles.fav}>
        <FavButton />
      </View>
      <View style={styles.price}>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            opacity: 0.5,
            fontWeight: 'bold',
          }}>
          Zara Jeans
        </Text>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
          ₮500.000
        </Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.42,
    height: 350,
    // backgroundColor: 'yellow',
    overflow: 'hidden',
  },
  imageStyle: {
    // resizeMode: 'contain',
    height: 300,
    borderRadius: 30,
    // overflow: 'hidden',
    // padding: 10,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  fav: {
    position: 'absolute',
    right: 10,
    bottom: 60,
    zIndex: 1,
  },
  price: {
    // backgroundColor: 'green',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
