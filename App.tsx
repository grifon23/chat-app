import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  AuthContext,
  AuthContextInterface,
} from './src/modules/auth/context/auth-context';
import {Routers} from './src/modules/root/user-group-navigation';

function App() {
  const [auth, setAuth] = useState(false);

  const sampleAuth: AuthContextInterface = {
    login: auth,
    setLogin: setAuth,
  };

  return (
    <AuthContext.Provider value={sampleAuth}>
      <Routers />
    </AuthContext.Provider>
  );
}

export default App;
