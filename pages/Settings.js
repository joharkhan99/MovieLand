import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Coming Soon.</Text>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#9d9d9d",
  },
});
