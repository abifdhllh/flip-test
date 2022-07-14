import React from 'react';
import {StatusBar} from 'react-native';

// Navigation
import AppNavigation from './src/navigation';

// Redux
import {Provider} from 'react-redux';
import {store} from './src/store';

// Style
import {Colors} from './src/utils/theme';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.orange} />
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
