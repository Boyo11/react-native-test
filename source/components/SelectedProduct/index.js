import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Sizes from '../Sizes';
import Colors from '../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectedProduct = () => {
  const [counter, setCounter] = useState(1);
  const addOne = () => {
    setCounter((prev) => prev + 1);
  };
  const removeOne = () => {
    if (counter > 1) setCounter((prev) => prev - 1);
  };
  return (
    <SwipeRow stopRightSwipe={-140} rightOpenValue={-120} stopLeftSwipe={20}>
      <View style={styles.behindContainer}>
        <TouchableHighlight>
          <View style={styles.delete}>
            <Text style={{color: 'white', fontSize: 12}}>Устгах</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        <View style={styles.collumn1}>
          <TouchableOpacity style={styles.button} onPress={addOne}>
            <Text style={styles.count}>+</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{counter}</Text>
          <TouchableOpacity style={styles.button} onPress={removeOne}>
            <Text style={styles.count}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.collumn2}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/564x/66/e7/0c/66e70c1472f83360eb40d4e5a16d36ef.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.collumn3}>
          <Text style={styles.productName}>productName</Text>
          <View style={styles.types}>
            <View style={styles.colorContainer}>
              <Text>Өнгө</Text>
              <Colors nonActive={true} colors={['red']} />
            </View>
            <View style={styles.sizeContainer}>
              <Text>Хэмжээ</Text>
              <Sizes nonActive={true} sizes={['L']} />
            </View>
          </View>
          <Text style={styles.price}>₮120.000</Text>
        </View>
      </View>
    </SwipeRow>
  );
};

export default SelectedProduct;

const styles = StyleSheet.create({
  content: {
    width: windowWidth * 1.1,
    paddingHorizontal: windowWidth * 0.05,
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 120,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  delete: {
    height: 120,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3B30',
  },
  behindContainer: {
    width: windowWidth,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  collumn1: {
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    width: 50,
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  count: {fontSize: 20, fontWeight: 'bold'},
  image: {width: 120 * 0.8, height: 120 * 0.8, borderRadius: 20},
  collumn2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  collumn3: {
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 12,
    color: 'black',
    opacity: 0.5,
  },
  types: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.87,
  },
  // colorContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  // },
});
