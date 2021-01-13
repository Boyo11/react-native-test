import React, {useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// "aaaa"+state.name+" ner ni ym."
// `aaaa ${state.name} ner ni ym.`

const SignUp = () => {
  const [state, setState] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const [valid, setValid] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    password1: false,
    password2: false,
  });

  const onChange = (attribute, value) => {
    let oldState = state;
    oldState[attribute] = value;
    setState({...oldState});
  };

  const check = (attribute, value) => {
    switch (attribute) {
      case 'name':
        setValid((prevState) => {
          return {
            ...prevState,
            name: value,
          };
        });
        break;
      case 'phoneNumber':
        setValid((prevState) => {
          return {
            ...prevState,
            phoneNumber: value,
          };
        });
        break;
      case 'email':
        setValid((prevState) => {
          return {
            ...prevState,
            email: value,
          };
        });
        break;
      case 'password1':
        setValid((prevState) => {
          return {
            ...prevState,
            password1: value,
          };
        });
        break;
      case 'password2':
        setValid((prevState) => {
          return {
            ...prevState,
            password2: value,
          };
        });
        break;
      default:
        break;
    }
  };
  const onClick = () => {
    let tmp = false;
    for (const property in state) {
      if (state[property] === '') {
        tmp = true;
        check(property, true);
        console.log(property);
      }
    }

    if (!tmp)
      setValid({
        name: false,
        phoneNumber: false,
        email: false,
        password1: false,
        password2: false,
      });
  };

  const matchPassword = (secondPassword) => {
    if (state.password === secondPassword) check('password2', false);
    else check('password2', true);
  };

  // const onChangeName = (value) => {
  //   setState((pstate) => {
  //     return {
  //       ...pstate,
  //       name: value,
  //     };
  //   });
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          onChangeText={(value) => onChange('name', value)}
          placeholder="Нэр"
          danger={valid.name}
        />
        <Input
          onChangeText={(value) => onChange('phoneNumber', value)}
          placeholder="Утас"
          keyboardType="number-pad"
          danger={valid.phoneNumber}
        />
        <Input
          onChangeText={(value) => onChange('email', value)}
          placeholder="Мэйл"
          keyboardType="email-address"
          danger={valid.email}
        />
        <Input
          onChangeText={(value) => onChange('password', value)}
          placeholder="Нууц үг"
          secureTextEntry={true}
          danger={valid.password1}
        />
        <Input
          onChangeText={(value) => matchPassword(value)}
          placeholder="Нууц үг давтах"
          secureTextEntry={true}
          danger={valid.password2}
        />
        <Button onPress={() => onClick()} title="Бүртгүүлэх" />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.8,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 50,
  },
});
