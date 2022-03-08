import React from 'react';
import AuthStackManager from './src/navigation/AuthStackManager';
import BottomBarManager from './src/navigation/BottomBarManager';

const Main = () => {
  // @ts-ignore: Unreachable code error
  // const isLogin = useSelector((state) => state.user?.token);
  const isLogin = false;
  return <>{isLogin ? <BottomBarManager /> : <AuthStackManager />}</>;
};

export default Main;
