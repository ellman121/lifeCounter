import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import {store} from './src/model/store';
import {Navigator} from './src/navigation/navigator';

const App = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>
  </NavigationContainer>
);

export default App;
