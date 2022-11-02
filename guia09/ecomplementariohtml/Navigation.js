import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Host from './Host';
import Local from './Local';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Host" component={Host} options={{
                title: 'Host', tabBarIcon: () => (
                    <Icon
                        name='logo-web-component'
                        type='ionicon'
                    />
                ),
            }} />
            <Tab.Screen name="Local" component={Local} options={{ title: 'Local', tabBarIcon: () => (
                    <Icon
                        name='code-slash-outline'
                        type='ionicon'
                    />
                ), }} />
        </Tab.Navigator>
    );
}