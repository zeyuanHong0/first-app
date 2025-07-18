import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

import { Colors } from '../../constants/Colors';

import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const AuthStack = createNativeStackNavigator();
export function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ animation: 'none' }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ animation: 'none' }}
      />
    </AuthStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
