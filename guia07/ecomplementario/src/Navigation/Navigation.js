import React from "react";
import Cats from '../screens/Cats'
import Dogs from "../screens/Dogs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator
        >
            <Tab.Screen

                name="cats"
                component={Cats}
                options={{
                    title: "Cats",
                    headerTitleAlign: 'center',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="cat" size={35} color={"#4B7BE5"} />
                    ),

                }}
            />
            <Tab.Screen name="dogs" component={Dogs} options={{
                title: "Dogs", tabBarIcon: () => (
                    <MaterialCommunityIcons name="dog" size={35} color={"#4B7BE5"} />
                ),
            }} />
        </Tab.Navigator>
    );
}
