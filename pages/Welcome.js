import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const renderWelcomePage = (imageSource, title, paragraph) => (
  <View style={styles.slide}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.paragraph}>{paragraph}</Text>
  </View>
);

const Welcome = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("Main");
    }
  };

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("Main");
    }
  };

  // const renderWelcomePage = (imageSource, title, paragraph) => (
  //   <View style={styles.slide}>
  //     <Image source={imageSource} style={styles.image} />
  //     <Text style={styles.title}>{title}</Text>
  //     <Text style={styles.paragraph}>{paragraph}</Text>
  //   </View>
  // );

  return (
    <>
      <Swiper
        style={styles.container}
        loop={false}
        // showsButtons={false}
        // showsPagination={false}
        index={currentIndex}
      >
        {renderWelcomePage(
          require("../assets/welcome.jpg"),
          "Welcome to Page 1",
          "This is the first page."
        )}
        {renderWelcomePage(
          require("../assets/welcome.jpg"),
          "Welcome to Page 2",
          "This is the second page."
        )}
        {renderWelcomePage(
          require("../assets/welcome.jpg"),
          "Welcome to Page 3",
          "This is the last page."
        )}
      </Swiper>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex < 2 ? "Next" : "Get Started"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonsContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 40,
    zIndex: 100,
  },
  button: {
    zIndex: 100,
    backgroundColor: "#E11A38",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: "45%",
    shadowRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
  },
});
