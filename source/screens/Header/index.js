import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../img/man.jpg')}/>
            <View> 
                <Icon name="bag" color="black" size={33} />
                <View style={styles.ball}>
                    <Text style={styles.number}>2</Text>
                </View>
            </View>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    container:{

        width: windowWidth,
        height: windowHeight * 0.08,
        //backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    }, 
    image: {
        width: 40,
        height:40,
        borderRadius: 20,
    },
    ball: {
         width: 20,
         height: 20,
         borderRadius: 15,
         backgroundColor: 'red',
         alignItems: 'center',
         position: 'absolute',
         right: -5,
    },
    number: {
        fontSize: 10,
        color: 'white',
    }
})
