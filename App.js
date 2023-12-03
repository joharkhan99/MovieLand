import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import StackNavigator from "./components/StackNavigator";
import Series from "./pages/Series";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with your actual loading logic
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E11A38 " />
      ) : (
        <StackNavigator />
      )}
    </View>
  );
}
