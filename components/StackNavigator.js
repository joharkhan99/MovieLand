import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "../pages/Welcome";
import TabNavigator from "./TabNavigator";
import MovieDetails from "../pages/MovieDetails";
import Watch from "../pages/Watch";
import All from "../pages/All";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);

  useEffect(() => {
    checkWelcomeStatus();
  }, []);

  const checkWelcomeStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("@welcome_shown");
      setIsWelcomeShown(value !== null);
    } catch (error) {
      console.error("Error retrieving welcome status:", error.message);
    }
  };

  const markWelcomeAsShown = async () => {
    try {
      await AsyncStorage.setItem("@welcome_shown", "true");
      setIsWelcomeShown(true);
    } catch (error) {
      console.error("Error saving welcome status:", error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isWelcomeShown ? "Main" : "Welcome"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome">
          {(props) => (
            <Welcome {...props} onWelcomeShown={markWelcomeAsShown} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="All" component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
