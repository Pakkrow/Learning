import React from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import CustomButton from '../components/Button';

const LandingScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
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
        Marvin's Resume App
      </Text>
      <Image
        source={require('../assets/images/ImmenseBG.png')}
        resizeMode="contain"
        style={{
          width: 220,
          height: 150,
          borderRadius: 360,
        }}
      />
      <Text
        style={{
          color: colors.primary_text,
          fontSize: 20,
          letterSpacing: 2,
          textAlign: 'center',
        }}
      >
        Welcome to my resume app. You can either explore it as a Guest or register to be able to
        interact with me.
      </Text>
      <View style={{ width: '100%' }}>
        <CustomButton text="Connect" onPress={() => navigation.navigate('Connect')} />
        <CustomButton text="Inscription" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

export default LandingScreen;