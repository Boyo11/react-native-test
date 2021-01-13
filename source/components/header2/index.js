import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            // onPress={()=>props.navigation.navigate.goBack()}
            style={styles.back}>
            <Icon name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}
            </Text>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight * 0.08,
       // backgroundColor: 'yellow',
        alignItems: 'center',
        flexDirection: 'row',
    }, 
    back: {
        width: windowWidth * 0.11,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: '25%'
    }
    

})
