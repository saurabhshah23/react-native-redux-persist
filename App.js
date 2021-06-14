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
import {
  DefaultTheme,
  Provider as PaperProvider,
  Divider,
} from 'react-native-paper';
import {Counter} from './src/components/Counter';
import {CounterRedux} from './src/components/CounterRedux';
import {Age} from './src/components/Age';
import {AppTitle} from './src/components/AppTitle';
import {Person} from './src/components/Person';
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
        <AppTitle />
        <Divider style={{marginVertical: 10}} />
        <Counter />
        <Divider style={{marginVertical: 10}} />
        <CounterRedux />
        <Divider style={{marginVertical: 10}} />
        <Person />
        <Divider style={{marginVertical: 10}} />
        <Age />
        <Divider style={{marginVertical: 10}} />
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
