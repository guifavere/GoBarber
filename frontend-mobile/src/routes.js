import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signed ? (
          <>
            <Stack.Screen
              component={SignIn}
              name="SignIn"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={SignUp}
              name="SignUp"
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen component={Dashboard} name="Dashboard" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
