import React from "react";
import { StyleSheet, View, Image } from "react-native";

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/animation.gif")}
        style={styles.backgroundImage}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: 100,
    height: "auto",
    objectFit: "contain",
    resizeMode: "contain",
  },
});
