import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "NowPlayingMovies";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&page_size=5";

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
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data.results));
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer]}>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
        style={styles.image}
      />
      {/* <Text style={styles.movieTitle}>{item.title}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Now Playing</Text>
        <TouchableOpacity style={styles.linkBtn}>
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
  },
  title: {
    color: "#DDD",
    fontSize: 17,
    fontWeight: "700",
  },
  flex: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
  },
  linkBtn: {
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
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

export default NowPlaying;
