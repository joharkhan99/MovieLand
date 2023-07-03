import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>Home</Text>
      </ScrollView>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E101C",
  },
  text: {
    fontSize: 200,
    color: "white",
    marginBottom: 200,
  },
});
