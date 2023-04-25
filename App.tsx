import React, {useState} from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {AppNavigator} from './src/navigation/AppNavigator';
import { default as theme } from './theme.json';

function App(): JSX.Element {
  const [themeMode, setThemeMode] = useState('light');
  let selectedTheme = themeMode === 'light' ? {...eva.light} : {...eva.dark};
  return (
    <ApplicationProvider
      {...eva}
      theme={{...selectedTheme, ...theme}}>
      <Provider {...{store}}>
        <AppNavigator />
      </Provider>
    </ApplicationProvider>
  );
}

export default App;
