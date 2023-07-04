import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

function Watch() {
  const navigation = useNavigation();
  const route = useRoute();
  const { movie_id } = route.params;
  const url = `https://v2.vidsrc.me/embed/${movie_id}`;

  //   <WebView
  //    source={{html: '<iframe width="100%" height="50%" src="https://v2.vidsrc.me/embed/tt2106476" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
  //    style={{marginTop: 20}}
  // />

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
        source={{
          html: `<iframe width="100%" height="100%" src="https://v2.vidsrc.me/embed/${movie_id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
        }}
        style={{
          padding: 0,
          margin: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        scalesPageToFit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    backgroundColor: "rgba(61,63,86,0.8)",
    borderRadius: 100,
    padding: 10,
  },
});

export default Watch;
