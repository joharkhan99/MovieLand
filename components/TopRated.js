import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const STORAGE_KEY = "top_rated_movies";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const { width } = Dimensions.get("window");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMovies = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedMovies) {
          setMovies(JSON.parse(storedMovies).slice(0, 5));
        } else {
          const response = await fetch(API_URL, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          });
          const data = await response.json();
          setMovies(data.results.slice(0, 5));
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data.results));
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const movieDetails = (id) => {
    navigation.navigate("MovieDetails", { movie_id: id });
  };

  const All = () => {
    navigation.navigate("All", { type: "TopRated" });
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer]}>
      <TouchableOpacity
        onPress={() => movieDetails(item.id)}
        style={{ width: "100%", height: "100%" }}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Top Rated</Text>
        <TouchableOpacity style={styles.linkBtn} onPress={() => All()}>
          <Text style={styles.linkText}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    flex: 1,
  },
  title: {
    color: "#DDD",
    fontSize: 17,
    fontWeight: 700,
  },
  flex: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
  },
  linkText: {
    color: "#7D7C7B",
  },
  itemContainer: {
    marginRight: 15,
    alignItems: "center",
    width: 150,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
});

export default TopRated;
