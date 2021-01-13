import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Titles from '../../components/Title';
import Header from '../../components/header2';

const EditProfile = (props) => {

    return (
        <View>
            <Header title="Тохиргоо"/>
            <View style={{paddingVertical: '8%'}}></View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('EmailScreen', {screen: 'EditProfile'})}>
                <Titles titles="email солих"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('PhoneScreen', {screen: 'EditProfile'})}>
                <Titles titles="утасны дугаар солих"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('PasswordScreen', {screen: 'EditProfile'})}>
                <Titles titles="нууц үг солих"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile;

const styles = StyleSheet.create({})
