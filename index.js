/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Userstore from './source/Context/Userstore';

const Container = () => {
    return(
    <Userstore>
        <App />
    </Userstore>
    )
}

AppRegistry.registerComponent(appName, () => Container);