import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import New from './pages/New';

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={SignIn} name="SignIn" />
          <Stack.Screen component={SignUp} name="SignUp" />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            keyboardHidesTabBar: true,
            style: { backgroundColor: '#8d41a8' },
          }}
        >
          <Tab.Screen
            component={Dashboard}
            name="Dashboard"
            options={{
              tabBarLabel: 'Agendamentos',
              tabBarIcon: ({ color }) => (
                <Icon name="event" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            component={New}
            name="New"
            options={{
              tabBarLabel: 'Agendar',
              tabBarIcon: ({ color }) => (
                <Icon name="add-circle-outline" size={20} color={color} />
              ),
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            component={Profile}
            name="Profile"
            options={{
              tabBarLabel: 'Meu perfil',
              tabBarIcon: ({ color }) => (
                <Icon name="person" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
