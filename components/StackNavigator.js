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
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Check if the Welcome page has been shown before
    AsyncStorage.getItem("hasShownWelcome")
      .then((value) => {
        if (value === "true") {
          setShowWelcome(false);
        }
      })
      .catch((error) => {
        console.log("AsyncStorage error:", error);
      });
  }, []);

  const handleWelcomeDismiss = () => {
    // Set the flag to indicate that the Welcome page has been shown
    AsyncStorage.setItem("hasShownWelcome", "true")
      .then(() => {
        setShowWelcome(false);
      })
      .catch((error) => {
        console.log("AsyncStorage error:", error);
      });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showWelcome ? "Welcome" : "Main"}
        screenOptions={{ headerShown: false }}
      >
        {showWelcome ? (
          <Stack.Screen name="Welcome">
            {(props) => <Welcome {...props} onDismiss={handleWelcomeDismiss} />}
          </Stack.Screen>
        ) : null}
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="All" component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
