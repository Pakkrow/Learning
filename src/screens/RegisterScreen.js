import React, { useState } from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/Button';
import * as EmailValidator from 'email-validator';

const RegisterScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [dataSource, setdataSource] = useState([]);
  const [data, setData] = useState({
    firstname: '',
    name: '',
    company: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({
    firstname: '',
    name: '',
    email: '',
    password: '',
  });
  const handleFirstnameChange = (value) => {
    setData({
      ...data,
      firstname: value,
    });
  };
  const handleNameChange = (value) => {
    setData({
      ...data,
      name: value,
    });
  };
  const handleEmailChange = (value) => {
    setData({
      ...data,
      email: value,
    });
  };
  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };
  const handleConfirmPasswordChange = (value) => {
    setData({
      ...data,
      password2: value,
    });
  };
  const paramsIsValid = () => {
    let bool = true;

    if (data.firstname.length < 2) {
      bool = false;
      setErrors({
        firstname: 'Le prénom doit contenir au moins 2 caractères.',
      });
    } else if (data.name.length < 2) {
      bool = false;
      setErrors({
        name: 'Le nom doit contenir au moins 2 caractères.',
      });
    } else if (!EmailValidator.validate(data.email)) {
      bool = false;
      setErrors({
        email: 'Email Invalide',
      });
    } else if (data.password.trim().length < 8) {
      bool = false;
      setErrors({
        password: 'Le mot de passe doit contenir au moins 8 caractères.',
      });
    } else if (data.password !== data.password2) {
      bool = false;
      setErrors({
        password2: 'Les deux mots de passe ne sont pas identiques.',
      });
    }
    return bool;
  };

  async function getMoviesFromApi() {
    try {
      let response = await fetch('http://192.168.0.13:3000/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: data.firstname,
          name: data.name,
          companyname: data.company,
          mail: data.email,
          password: data.password,
        }),
      });
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
    // console.log('Clicked');
    // await fetch('http://192.168.0.13:3000/users', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // })
    //   .then((response) => console.log(response.json()))
    //   .catch((error) => console.log(error));
  }

  const handleSubmit = () => {
    setErrors({ firstname: '', name: '', email: '', password: '' });

    if (paramsIsValid()) {
      getMoviesFromApi();
      //Hash de mdp ici a priori
      //navigation.navigate('Register2', { data });
    } else {
      console.log('errors');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: colors.primary_yellow,
          fontSize: 40,
          letterSpacing: 5,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Register
      </Text>
      <View style={{ width: '100%', justifyContent: 'space-between', marginTop: 20 }}>
        <TextInput
          label="Firstname"
          onChangeText={(val) => handleFirstnameChange(val)}
          mode="outlined"
          style={{ marginTop: 15 }}
        />
        <Text
          style={{
            color: '#FF0000',
          }}
        >
          {errors.firstname}
        </Text>
        <TextInput
          label="Lastname"
          onChangeText={(val) => handleNameChange(val)}
          mode="outlined"
          style={{ marginTop: 15 }}
        />
        <Text
          style={{
            color: '#FF0000',
          }}
        >
          {errors.name}
        </Text>
        <TextInput label="Company name" mode="outlined" style={{ marginTop: 15 }} />
        <Text></Text>
        <TextInput
          label="Email"
          floatOnFocus={true}
          onChangeText={(val) => handleEmailChange(val)}
          mode="outlined"
          style={{ marginTop: 15 }}
        />
        <Text
          style={{
            color: '#FF0000',
          }}
        >
          {errors.email}
        </Text>
        <TextInput
          label="Password"
          onChangeText={(val) => handlePasswordChange(val)}
          mode="outlined"
          style={{ marginTop: 15 }}
        />
        <Text
          style={{
            color: '#FF0000',
          }}
        >
          {errors.password}
        </Text>
        <TextInput
          label="Confirm password"
          onChangeText={(val) => handleConfirmPasswordChange(val)}
          mode="outlined"
          style={{ marginTop: 15 }}
        />
        <Text
          style={{
            color: '#FF0000',
          }}
        >
          {errors.password2}
        </Text>
      </View>
      <CustomButton text="Register" onPress={() => handleSubmit()} />
    </View>
  );
};

export default RegisterScreen;
