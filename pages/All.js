import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";

function All() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const route = useRoute();
  const { type } = route.params;

  const API_KEY = Constants.manifest.extra.API_KEY;
  var STORAGE_KEY = "";
  var API_URL = "";
  var title = "";

  switch (type) {
    case "NowPlaying":
      title = "Now Playing Movies";
      STORAGE_KEY = "NowPlayingMovies";
      API_URL =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      break;
    case "Popular":
      title = "Popular Movies";
      STORAGE_KEY = "PopularMovies";
      API_URL =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      break;
    case "TopRated":
      title = "Top Rated Movies";
      STORAGE_KEY = "TopRatedMovies";
      API_URL =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      break;
    case "Upcoming":
      title = "Upcoming Movies";
      STORAGE_KEY = "UpcomingMovies";
      API_URL =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
      break;
    case "Category":
      const { cat_name, cat_id } = route.params;
      title = `${cat_name} Movies`;
      STORAGE_KEY = cat_name;
      API_URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${cat_id}`;
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMovies = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedMovies) {
          setMovies(JSON.parse(storedMovies));
        } else {
          const response = await fetch(API_URL, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          });
          const data = await response.json();
          setMovies(data.results);
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data.results));
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <TouchableOpacity
        onPress={() => movieDetails(item.id)}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.movieImage}
        />
        <View style={styles.absolute}>
          <Text style={styles.movieTitle}>{item.title}</Text>

          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="#F7CC49" />
            <Text style={styles.averageRating}>
              {item.vote_average.toFixed(1)}/10
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const movieDetails = (id) => {
    navigation.navigate("MovieDetails", { movie_id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TouchableWithoutFeedback onPress={handleBack}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back-sharp" size={20} color="#DDD" />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  averageRating: {
    color: "#DDD",
    fontSize: 12,
  },
  backButton: {
    zIndex: 1,
  },
  title: {
    color: "#DDD",
    fontSize: 15,
    fontWeight: 700,
  },
  flex: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    gap: 15,
  },
  linkBtn: {
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  linkText: {
    color: "#7D7C7B",
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 20,
    paddingTop: 40,
  },
  movieContainer: {
    flex: 1,
    margin: 10,
    marginHorizontal: 10,
    marginLeft: 5,
    borderRadius: 10,
    overflow: "hidden",

    shadowColor: "#000",
    elevation: 20,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  movieImage: {
    width: "100%",
    height: 200,
  },
  absolute: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "rgba(50,63,81,0.9)",
    paddingBottom: 3,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: 600,
    padding: 5,
    color: "#FFF",
    textAlign: "center",
  },
});

export default All;
