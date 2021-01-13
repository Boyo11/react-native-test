import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ProfileScreen from '../../screens/ProfileScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = (props) => {
  const navigation = useNavigation();
  const image = {
    uri:
      'https://scontent.fuln1-2.fna.fbcdn.net/v/t1.0-9/128651302_827361707838138_7788167008288116042_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=WMZPMQOL8dsAX_ARp08&_nc_ht=scontent.fuln1-2.fna&oh=9a0052f50d94e5922a8c107bdd0cca21&oe=600F2D7B',
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=navigation.navigate('ProfileScreen')} >
        <Image source={image} style={styles.picture} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <View>
          <Icon name="shopping-outline" size={30} color="black" />
          <View style={styles.number}>
            <Text style={styles.count}>2</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.08,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  number: {
    backgroundColor: '#E80CBD',
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  count: {
    fontSize: 10,
    color: 'white',
  },
});
