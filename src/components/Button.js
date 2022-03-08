import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Button } from 'react-native-ui-lib';

const CustomButton = ({ text = '', onPress = () => {}, outline = false }) => {
  const { colors } = useTheme();

  return (
    <Button
      onPress={onPress}
      backgroundColor={outline ? 'white' : colors.primary_yellow}
      style={
        outline
          ? {
              borderColor: colors.primary_yellow,
              borderWidth: 1,
              marginTop: 5,
              marginBottom: 10,
              paddingVertical: 12,
              borderRadius: 4,
              alignSelf: 'stretch',
            }
          : {
              marginTop: 20,
              marginBottom: 10,
              paddingVertical: 12,
              borderRadius: 4,
              elevation: 3,
              alignSelf: 'stretch',
            }
      }
      activeOpacity={0.4}
    >
      <Text
        style={
          outline
            ? {
                fontSize: 16,
                color: 'white',
                fontFamily: 'Arcon-Regular',
                textAlign: 'center',
                color: colors.primary_yellow,
              }
            : { fontSize: 16, color: 'white', fontFamily: 'Arcon-Regular', textAlign: 'center' }
        }
      >
        {text}
      </Text>
    </Button>
  );
};

export default CustomButton;
