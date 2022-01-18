import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  AuthContext,
  AuthContextInterface,
} from './src/modules/auth/context/auth-context';
import {Dashboard} from './src/modules/card/screen/card-screen';
// import {Routers} from './src/modules/root/user-group-navigation';

function App() {
  const [auth, setAuth] = useState(false);

  const sampleAuth: AuthContextInterface = {
    login: auth,
    setLogin: setAuth,
  };

  return (
    <AuthContext.Provider value={sampleAuth}>
      {/* <Routers /> */}
      <Dashboard />
    </AuthContext.Provider>
  );
}

export default App;
