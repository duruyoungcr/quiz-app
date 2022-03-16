import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/Home';
import Quiz from './screens/Quiz';


const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#333' },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: { color: '#FFFFFF' },
  headerTitleAlign: 'center',
  headerLeft: () => null
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Sign into your account',

          }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            title: 'Create an account',
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Quizzo',
          }}
        />
        <Stack.Screen
          name='Quiz'
          component={Quiz}
          options={{
            title: 'Quizzo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
