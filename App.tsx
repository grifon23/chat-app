import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ChatApp} from './src/modules/chat/chatApp';

const App = () => {
  return (
    <SafeAreaView>
      <ChatApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
