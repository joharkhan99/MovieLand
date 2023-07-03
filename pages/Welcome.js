import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

function Welcome({ navigation }) {
  const handleGetStarted = () => {
    // navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/icon.png")} // Add your background image source here
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add your desired overlay opacity here
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#E11A38",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
