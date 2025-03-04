import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import StackNativator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/Store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNativator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
