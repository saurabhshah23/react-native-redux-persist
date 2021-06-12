/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Counter} from './src/components/Counter';
import {CounterRedux} from './src/components/CounterRedux';
import {Startup} from './src/components/Startup';
// REDUX
import store, {persistor} from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';

// REDUX-PERSIST
import {PersistGate} from 'redux-persist/integration/react';

const MainMarkup = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Startup />
        <Counter />
        <CounterRedux />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
    }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
          <PaperProvider theme={theme}>
            <MainMarkup />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
};

export default App;
