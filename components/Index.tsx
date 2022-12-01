import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Cart } from './Cart';
import { Login } from './Login';
const Stack = createBottomTabNavigator();

export default function Index() {
    const isAuth = false;
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon as={AntDesign} name="home" />
                }}
            />

            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon as={AntDesign} name="shoppingcart" />
                }}
            />
            <Stack.Screen
                name="Profile"
                component={isAuth ? Cart: Login}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon as={AntDesign} name="shoppingcart" />
                }}
            />

        </Stack.Navigator>
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
