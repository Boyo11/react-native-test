import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CatImage = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductInCat', {
          title: props.title,
        })
      }>
      <View style={styles.container}>
        <View style={styles.catTitle}>
          <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
        </View>
        <Image style={styles.img} source={props.source} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    backgroundColor: '#e8e8e8',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  img: {
    width: '40%',
    height: 150,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  catTitle: {
    justifyContent: 'center',
    paddingLeft: 50,
  },
});

export default CatImage;
