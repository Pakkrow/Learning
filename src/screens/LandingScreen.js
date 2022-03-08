import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LandingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: '#f1c40f',
          fontSize: 30,
          letterSpacing: 5,
          fontWeight: 'bold',
        }}
      >
        Marvin's Resume App
      </Text>
      <Text
        style={{
          color: '#34495e',
          fontSize: 20,
          letterSpacing: 2,
          textAlign: 'justify',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem enim. Etiam
        accumsan nibh eu laoreet sollicitudin. Proin ultricies, metus nec auctor ultricies, dui
        metus vulputate odio, id hendrerit lectus mauris a ex.
      </Text>
      <Text
        style={{
          color: '#7f8c8d',
          fontSize: 16,
          letterSpacing: 10,
          fontWeight: 'bold',
        }}
      >
        3XP4N510
      </Text>
      <Button onPress={() => {}} title="Accept" color="#2ecc71" />
      <Button onPress={() => {}} title="Decline" color="#c0392b" />
    </View>
  );
};

export default LandingScreen;
