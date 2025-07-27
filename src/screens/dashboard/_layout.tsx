// App.tsx 或 Navigation.tsx
import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colors } from '../../../constants/Colors';

import Books from './books';
import Create from './create';
import Profile from './profile';

const Tab = createBottomTabNavigator();

// 主导航
function Dashboard() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          backgroundColor: theme.navBackground,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{ title: 'Create' }}
      />
      <Tab.Screen name="Books" component={Books} options={{ title: 'Books' }} />
    </Tab.Navigator>
  );
}

export default Dashboard;
