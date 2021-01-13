import React, {useState}from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import NIcon from 'react-native-vector-icons/MaterialIcons';
import Titles from '../../components/Title';
import Header from '../../components/ActionsHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// let buttons = {dans:'dans', setting1: 'Мейл солих', setting2: 'утасны дугаар солих', setting3: 'нууц үг солих'};

const Profile = (props) => {
    return (
        <>
        <Header title="Хувийн мэдээлэл"/>

        <View style={styles.container}>
            <View>
                <Image style={styles.profile} source={require('../../img/man.jpg')}/>
            </View>
           
            <TouchableOpacity>
                <View style={styles.information}>
                  <Text style={{fontWeight: 'bold'}}>Жул Со</Text>
                  <Text>JulSon@gmail.com</Text>
                  <Text>99699966</Text>
                </View>
            </TouchableOpacity>  
        </View>

        <TouchableOpacity onPress={()=>props.navigation.navigate('PasswordScreen')}>
            <View  style={styles.screens}>
            <Text>Холбосон Данс</Text>
            <Icon name="chevron-right" color="black" size={25}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Edit')}>
            <View  style={styles.screens}>
            <Text>Тохиргоо</Text>
            <Icon name="chevron-right" color="black" size={25}/>
            </View>
        </TouchableOpacity>            
        
        <View style={{paddingVertical: '10%'}}>
        </View>

        <TouchableOpacity style={styles.exit}>
            <Text style={{color: 'red'}}>Гарах</Text>
            <NIcon name="exit-to-app" color="red" size={25}/>
        </TouchableOpacity>  
        </>

    );
}

export default Profile;

const styles = StyleSheet.create({
    container:{ 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '15%',
    },
    profile: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 65,
    },
    information: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    screens: {
        width: windowWidth * 1,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.025,
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    exit: {
        width: windowWidth * 1,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.025,
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    }
})