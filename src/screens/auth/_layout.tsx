import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Register';

const AuthStack = createNativeStackNavigator();
function AuthNavigator() {
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

export default AuthNavigator;
