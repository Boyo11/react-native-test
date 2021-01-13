import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {UserState} from '../../Context/Userstore';
import Context from '../../Context/Userstore';

const Login = (props) => {
  const value = useContext(UserState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title1}>LORESA</Text>
        <Text style={styles.title2}>онлайн хувцасны дэлгүүр</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input placeholder="Утасны дугаар эсвэл Мэйл" />
          <Input placeholder="Нууц үг" secureTextEntry={true} />
        </View>
        <Button
          title="Нэвтрэх"
          onPress={() => {
            value.auth.login('user', 'pass');
          }}
        />
        <TouchableOpacity onPress={() => props.navigation.push('SignUp')}>
          <Text>Бүртгүүлэх</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 37,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 10,
  },
  titles: {marginBottom: 50},
  content: {
    // backgroundColor: 'red',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputs: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
    justifyContent: 'space-between',
  },
});
