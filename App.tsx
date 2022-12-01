import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import { Onboarding } from './components/Onboarrding';
import Index from './components/Index';
import { Address } from './components/Address';
import { Payment } from './components/Payment';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ForgotPassword } from './components/ForgotPassword';
import { Details } from './components/Details';
import { Notification } from './components/Notification';

const Stack = createNativeStackNavigator();

export default function App() {
  const isFirstTime = false;

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={new QueryClient()}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Index"
              component={isFirstTime ? Onboarding : Index}
              options={{
                headerShown: false,

              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}

            />
             <Stack.Screen
              name="Notification"
              component={Notification}

            />
            <Stack.Screen
              name="Address"
              component={Address}

            />
            <Stack.Screen
              name="Payment"
              component={Payment}

            />
            <Stack.Screen
              name="Login"
              component={Login}

            />
            <Stack.Screen
              name="Signup"
              component={Signup}

            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}

            />

          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider >
    </NativeBaseProvider>
  );
}
