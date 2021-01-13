import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import FavButton from '../../components/FavButton';
import Product from '../../components/Product';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {useRoute} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Shop = (props) => {
  const route = useRoute();
  const [spin, setSping] = useState(false);
  const [state, setState] = useState({
    data: [],
  });

  const getData = () => {
    setSping(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setState({data: res.data}))
      .catch((e) => console.log(e))
      .finally(() => {
        setSping(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header navigation={props.navigation}/>
      {spin && (
        <View style={styles.spin}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContainerStyles}>
        {route.name === 'Shop' && (
          <View style={styles.search}>
            <Text style={styles.title}>Trend Collections</Text>
            <Input placeholder="Хайх..." />
          </View>
        )}
        {state.data.map((e) => (
          <View style={styles.card} key={e.id}>
            <Text style={[styles.title, {fontSize: 10}]}>
              {e.title.split(' ')[0]} {e.id}
            </Text>
            <View style={{padding: 10}}>
              <Text>{e.body}</Text>
            </View>
          </View>
        ))}
        {/* {state.data.map((e, i) => (
          <Product navigation={props.navigation} data={e} key={i} />
        ))} */}
      </ScrollView>
    </View>
  );
};

export default Shop;

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
  search: {
    width: '100%',
    // backgroundColor: 'red',
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},
  card: {
    width: windowWidth * 0.42,
    height: 250,
    backgroundColor: 'yellow',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  spin: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
});
