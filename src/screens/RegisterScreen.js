import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/Button';

const RegisterScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

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
      <Text
        style={{
          color: colors.primary_text,
          fontSize: 15,
          letterSpacing: 2,
          textAlign: 'center',
        }}
      ></Text>
      <View style={{ width: '100%', justifyContent: 'space-between', marginTop: 50 }}>
        <TextInput label="Firstname" mode="outlined" style={{ marginTop: 15 }} />
        <TextInput label="Lastname" mode="outlined" style={{ marginTop: 15 }} />
        <TextInput label="Company name" mode="outlined" style={{ marginTop: 15 }} />
        <TextInput label="Email" mode="outlined" style={{ marginTop: 15 }} />
        <TextInput label="Password" mode="outlined" style={{ marginTop: 15 }} />
        <TextInput label="Confirm password" mode="outlined" style={{ marginTop: 15 }} />
      </View>

      <CustomButton text="Register" />
    </View>
  );
};

export default RegisterScreen;
