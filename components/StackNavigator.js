import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import TabNavigator from "./TabNavigator";
import MovieDetails from "../pages/MovieDetails";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
