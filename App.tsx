import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider  } from 'react-query'
import { Signup } from './components/Signup';
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={new QueryClient()}  >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Signup}
              options={{
                headerShown: false,
                tabBarIcon: () => <Icon as={AntDesign} name="home" />
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Home}
              options={{
                headerShown: false,
                tabBarIcon: () => <Icon as={AntDesign} name="shoppingcart" />
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider >
    </NativeBaseProvider>
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
