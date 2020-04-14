import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

export default function New() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: { marginLeft: 20 },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        component={SelectProvider}
        name="SelectProvider"
        options={{ title: 'Selecione o prestador' }}
      />
      <Stack.Screen
        component={SelectDateTime}
        name="SelectDateTime"
        options={{ title: 'Selecione o horário' }}
      />
      <Stack.Screen component={Confirm} name="Confirm" />
    </Stack.Navigator>
  );
}
