import React from 'react';
import { Icon, Text } from 'native-base';
import { Home } from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: () => <Icon as={Ionicons} name="home" size={'lg'} />
                }}
            />

            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: () => <Icon as={Ionicons} name="cart" size={'lg'} />,
                    tabBarBadge: 0
                }}
            />
            <Stack.Screen
                name="Profile"
                component={isAuth ? Cart : Login}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: () => <Icon as={Ionicons} name="file-tray" size={'lg'} />
                }}
            />

        </Stack.Navigator>
    );
}


