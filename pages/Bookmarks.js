import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import SavedMovies from "../components/SavedMovies";

function Bookmarks() {
  const [activeTab, setActiveTab] = useState("Movies");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Movies" && styles.activeTab]}
          onPress={() => handleTabChange("Movies")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Movies" && styles.activeTabText,
            ]}
          >
            Movies
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Series" && styles.activeTab]}
          onPress={() => handleTabChange("Series")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Series" && styles.activeTabText,
            ]}
          >
            Series
          </Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView> */}
      {activeTab === "Movies" ? <SavedMovies /> : <Series />}
      {/* </ScrollView> */}
    </View>
  );
}

export default Bookmarks;

const styles = StyleSheet.create({
  title: {
    color: "#DDD",
    fontSize: 19,
    fontWeight: 500,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 20,
    paddingBottom: 0,
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#0D1117",
    marginTop: 15,
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 15,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#1E202A",
  },
  activeTab: {
    backgroundColor: "#E11A38",
  },
  tabText: {
    color: "#7D7C7B",
    fontSize: 16,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#DDD",
  },
});
