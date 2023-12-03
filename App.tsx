/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './screens/Counter';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // const counter = useSelector(state=>state.counter);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
