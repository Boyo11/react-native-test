import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import {useRoute} from '@react-navigation/native';
import Input from '../../components/Input';
import Buttons from '../../components/Button';
import Header from '../../components/header2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmailScreen = (props) => {

    return (
    <View>
          <View>
                <Header title="Email солих"/>
            </View>

            <View style={styles.container}>
           <View style={styles.email2}>
            <Input placeholder="солих email-ээ оруулна уу"/>
            </View>
            <View style={styles.email2}>
            <Input placeholder="нууц үг"/>
            </View>

            <View style={styles.button}></View>
            <Buttons 
            title="солих"
            />
        </View>
    </View>
    );
}


export default EmailScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    email1: {
        width: windowWidth * 1,
        paddingHorizontal: '6%',
        marginTop: '13%',
        alignItems: 'center',

    },
    email2: {
        width: windowWidth * 1,
        paddingHorizontal: '6%',
        marginTop: '7%',
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'red',
        marginTop: '7%',

    }
})
