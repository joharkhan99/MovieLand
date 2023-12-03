import React, { useState, useEffect } from "react";
import { View } from "react-native";
import StackNavigator from "./components/StackNavigator";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <StackNavigator />
      )}
    </View>
  );
}
