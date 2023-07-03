import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
