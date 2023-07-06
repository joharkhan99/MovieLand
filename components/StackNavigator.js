import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "../pages/Welcome";
import TabNavigator from "./TabNavigator";
import MovieDetails from "../pages/MovieDetails";
import Watch from "../pages/Watch";
import All from "../pages/All";
import Series from "../pages/Series";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="All" component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
