import React, { useEffect, useState } from 'react';
import { Image, Platform, Keyboard } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomBarManager = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary_button,
        tabBarInactiveBackgroundColor: colors.primary_button,
        tabBarLabelStyle: {
          backgroundColor: colors.primary_button,
          elevation: 0,
          fontFamily: 'Arcon-Regular',
          fontSize: 11,
        },
        showLabel: true,
        tabBarStyle: {
          backgroundColor: colors.primary_button,
          paddingTop: 5,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ffffff60',
      }}
      initialRouteName="Landing"
    >
      <Tab.Screen
        name="Accueil"
        title=""
        component={LandingStackManager}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
          ),
          header: () => null,
        }}
        R
      />
    </Tab.Navigator>
  );
};

const LandingStack = createStackNavigator();

const LandingStackManager = ({ route, navigation }) => {
  return (
    <LandingStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerShadowVisible: false,
      }}
    >
      <LandingStack.Screen name="Landing" component={LandingScreen} />
      <LandingStack.Screen name="Alarms" component={AlarmsScreen} />
      <LandingStack.Screen name="MyDates" component={MyDatesScreen} />
    </LandingStack.Navigator>
  );
};

export default BottomBarManager;
