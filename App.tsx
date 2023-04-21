import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigator } from './src/navigation/AppNavigator';

function App(): JSX.Element {
  const [themeMode, setThemeMode] = useState("light")

  return (
    <Provider {...{ store }}>
      <ApplicationProvider {...eva} theme={themeMode === "dark" ? eva.dark : eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
