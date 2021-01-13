import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Category from '../../components/Catergory';
import Header from '../../components/Header';

const Categories = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Category title="Хүүхэд" source={require('../../img/kid.jpg')} />
        <Category title="Эрэгтэй" source={require('../../img/man.jpg')} />
        <Category title="Эмэгтэй" source={require('../../img/woman.jpg')} />
        <Category title="Хүүхэд" source={require('../../img/kid.jpg')} />
        <Category title="Эрэгтэй" source={require('../../img/man.jpg')} />
        <Category title="Эмэгтэй" source={require('../../img/woman.jpg')} />
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '5%',
  },
});
