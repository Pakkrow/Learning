import React from 'react';
import customTheme from './src/theme/customTheme';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';

const App = () => {
  // @ts-ignore: Unreachable code error
  // const isLogin = useSelector((state) => state.user?.token);
  const isLogin = false;
  return (
    <NavigationContainer theme={customTheme}>
      <Main />
    </NavigationContainer>
  );
};

export default App;
