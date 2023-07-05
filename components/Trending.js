import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Trending = () => {
  const flatListRef = React.useRef(null);
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  const movieDetails = (id) => {
    navigation.navigate("MovieDetails", { movie_id: id });
  };

  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedMovies = await getCachedMovies();

        if (cachedMovies) {
          setMovies(cachedMovies);
        } else {
          const response = await fetch(API_URL, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          });
          const data = await response.json();
          const fetchedMovies = data.results;
          setMovies(fetchedMovies);
          cacheMovies(fetchedMovies);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const getCachedMovies = async () => {
    try {
      const cachedData = await AsyncStorage.getItem("movies");
      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      console.error("Error retrieving cached movies:", error);
      return null;
    }
  };

  const cacheMovies = async (movies) => {
    try {
      await AsyncStorage.setItem("movies", JSON.stringify(movies));
    } catch (error) {
      console.error("Error caching movies:", error);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          width,
          padding: 10,
          borderRadius: 10,
          overflow: "hidden",
          shadowColor: "#0D1117",
          elevation: 20,
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 5,
          },
        }}
      >
        <TouchableOpacity
          onPress={() => movieDetails(item.id)}
          style={{ width: "100%", height: "100%" }}
          activeOpacity={0.7}
        >
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 8,
            }}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ height: 200, borderRadius: 10, marginBottom: 10 }}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
      />
    </View>
  );
};

export default Trending;
