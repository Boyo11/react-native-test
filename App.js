import React, {useState, useContext, useEffect} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './source/screens/Login';
import SignUp from './source/screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from './source/screens/Shop';
import Categories from './source/screens/Categories';
import Favourites from './source/screens/Favourites';
import Icon from 'react-native-vector-icons/Entypo';
import ProductScreen from './source/screens/ProductScreen';
import ProfileScreen from './source/screens/ProfileScreen';
import EditProfile from './source/screens/EditProfile';
import header from './source/components/header2';
import {UserState} from './source/Context/Userstore';
import EmailScreen from './source/screens/EmailScreen/index';
import PasswordScreen from './source/screens/PasswordScreen';
import PhoneScreen from './source/screens/PhoneScreen';
import { TabBarIOS } from 'react-native';

const BottomTab = createBottomTabNavigator();

const BottomMyTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Дэлгүүр',
          tabBarIcon: ({color, size}) => (
            <Icon name="shop" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Дэлгүүр',
          tabBarIcon: ({color, size}) => (
            <Icon name="vinyl" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Таалагдсан',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const ProductStack = createStackNavigator();

const ProStack = () => {
  return (
    <ProductStack.Navigator independent={true}>
      <ProductStack.Screen
        name="BottomMyTabs"
        component={BottomMyTabs}
        options={{
          headerShown: false,
        }}
      />
      <ProductStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProductStack.Navigator>
  );
};

const LoginStack = createStackNavigator();

const MyStack = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Бүртгүүлэх',
          headerTitleAlign: 'center',
        }}
      />
    </LoginStack.Navigator>
  );
};

 const EditStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

// const Pro = () => {
//   return(
//     <NavigationContainer>
//       <ProfileStack>
//         <ProStack.Screen 
//         {() => {(
//           <SettingsStack.Navigator>
//             <SettingsStack.Screen
//               name="PasswordScreen"
//               component={PasswordScreen}
//             />
//             <SettingsStack.Screen name="ProfileScreen" component={ProfileScreen} />
//           </SettingsStack.Navigator>
//         )}}
//         />
//       </ProfileStack>
//     </NavigationContainer>
//   )
// }


const Edit = () => {
  return(
    <EditStack.Navigator>
      <EditStack.Screen
      name="PasswordScreen" 
      component={PasswordScreen}
      options={{
        headerShown: false,
      }}
      />
      <EditStack.Screen
      name="EmailScreen" 
      component={EmailScreen}
      options={{
        headerShown: false,
      }}
      />
      <EditStack.Screen
      name="PhoneScreen" 
      component={PhoneScreen}
      options={{
        headerShown: false,
      }}
      />
      
    </EditStack.Navigator>
  )
}
const MainStack = createStackNavigator();





const RootStack = createStackNavigator();

const Pro = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator mode="Profile">
        <RootStack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
        <RootStack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


const App = () => {

  const {state} = useContext(UserState);


  return (
    <NavigationContainer >
      {state.token ?   <Pro /> :  <ProStack />}
    </NavigationContainer>
  );
};

export default App;
