import { createContext } from 'react';

const AuthContext = createContext({
  isAuth: false,
  changeIsAuth: () => {},
});

export default AuthContext;
