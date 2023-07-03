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
import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";

function Home() {
  const [activeTab, setActiveTab] = useState("Movies");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
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

      <Categories />

      <ScrollView>
        {activeTab === "Movies" ? <Movies /> : <Series />}
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
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#0E101C",
    paddingVertical: 10,
    marginTop: 20,
    justifyContent: "flex-start",
    gap: 30,
    paddingHorizontal: 20,
  },
  tab: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    // backgroundColor: "#E11A38",
    // borderBottomColor: "#E11A38",
  },
  tabText: {
    color: "#7D7C7B",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#FBEC33",
  },
});
