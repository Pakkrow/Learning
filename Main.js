import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthContext from './src/context/context';
import AuthStackManager from './src/navigation/AuthStackManager';
import BottomBarManager from './src/navigation/BottomBarManager';
import customTheme from './src/theme/customTheme';

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);

  changeIsAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ isAuth, changeIsAuth }}>
      <NavigationContainer theme={customTheme}>
        {isAuth !== true ? <AuthStackManager /> : <BottomBarManager />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Main;
