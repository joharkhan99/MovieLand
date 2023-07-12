import React, { useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Watch() {
  const navigation = useNavigation();
  const route = useRoute();
  const { movie_id } = route.params;
  const url = `https://v2.vidsrc.me/embed/${movie_id}`;

  const webViewRef = useRef(null);
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <TouchableWithoutFeedback onPress={handleBack}>
        <View style={styles.backButton}>
          <Ionicons
            name="arrow-back-sharp"
            size={20}
            color="white"
            style={styles.backIcon}
          />
        </View>
      </TouchableWithoutFeedback>

      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        style={{ flex: 1 }}
        allowsFullscreenVideo={true}
        // javaScriptEnabled={false}
        // javaScriptCanOpenWindowsAutomatically={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 100,
  },
  backIcon: {
    backgroundColor: "rgba(61,63,86,0.8)",
    borderRadius: 100,
    padding: 10,
  },
});

export default Watch;
