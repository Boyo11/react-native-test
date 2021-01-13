import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ActionHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.goArrow}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" color="black" size={30} />
      </TouchableOpacity>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
      </View>
    </View>
  );
};

export default ActionHeader;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: windowHeight * 0.015,
    // position: 'absolute',
    zIndex: 10,
  },
  goArrow: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
    position: 'absolute',
    left: 10,
  },
});
