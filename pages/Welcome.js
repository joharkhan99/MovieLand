import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

function Welcome({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/welcome.jpg")} // Add your background image source here
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Movieland</Text>
          <Text style={styles.paragraph}>
            The best platform to watch free movies and enjoy great time!
          </Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add your desired overlay opacity here
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 100,
    padding: 20,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 20,
    fontWeight: 700,
  },
  button: {
    backgroundColor: "#E11A38",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    marginTop: 40,
    shadowColor: "#E11A38",
    elevation: 20,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: 700,
  },
  paragraph: {
    color: "#ccc",
    textAlign: "center",
  },
});
