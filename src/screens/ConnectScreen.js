import React, { useContext, useState } from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/Button';
import AuthContext from '../context/context';

const LandingScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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

  /* const paramsIsValid = () => {
    let bool = true

    if (!EmailValidator.validate(data.email)) {
        bool = false
        setErrors({
            email: 'Email Invalide'
        })
    } else if (data.password.trim().length < 8) {
        bool = false
        setErrors({
            email: 'Le mot de passe doit contenir au moins 8 caractères.'
        })
    }
    return bool;
}*/

  const handleSubmit = () => {
    // setErrors({ email: '', password: '' });

    if (true) {
      //paramsIsValid()) {
      context.changeIsAuth();
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
          marginTop: 150,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Connect
      </Text>
      <Text
        style={{
          color: colors.primary_text,
          fontSize: 20,
          letterSpacing: 2,
          textAlign: 'center',
        }}
      ></Text>
      <View style={{ width: '100%', justifyContent: 'space-between', marginTop: 100 }}>
        <TextInput label="Email" mode="outlined" />
        <TextInput label="Password" mode="outlined" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: colors.primary_text,
            marginRight: 5,
          }}
        >
          Pas encore inscrit ?
        </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              textAlign: 'center',
              color: colors.primary_button,
              paddingBottom: 30,
            }}
          >
            Inscrivez-vous ici
          </Text>
        </Pressable>
      </View>
      <CustomButton text="Connect" />
    </View>
  );
};

export default LandingScreen;
