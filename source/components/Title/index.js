import React from 'react'
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Title = (props) => {
    return (
        <View>
        <TouchableOpacity style={styles.title}>
            
            <Text>{props.titles}</Text>
            <Icon name="chevron-right" color="black" size={25}/>

        </TouchableOpacity> 
    </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    container:{

    },
    title: {
        width: windowWidth * 1,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.025,
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
