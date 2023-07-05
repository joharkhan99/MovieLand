import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Search from "./Search";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const loadSavedMovies = async () => {
      try {
        const savedMoviesString = await AsyncStorage.getItem("savedMovies");
        const savedMoviesArray = savedMoviesString
          ? JSON.parse(savedMoviesString)
          : [];
        setSavedMovies(savedMoviesArray);
      } catch (error) {
        console.error("Error loading saved movies:", error.message);
      }
    };

    loadSavedMovies();
  }, []);

  const removeMovie = async (id) => {
    try {
      const updatedMovies = savedMovies.filter((movie) => movie.id !== id);
      setSavedMovies(updatedMovies);
      await AsyncStorage.setItem("savedMovies", JSON.stringify(updatedMovies));

      Alert.alert("Movie removed successfully!");
    } catch (error) {
      console.error("Error removing movie:", error.message);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.posterImage}
      />
      <View style={styles.movieDetails}>
        <View>
          <Text style={styles.title}>{item.title}</Text>

          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text style={styles.releaseDate}>
              {item.release_date.substring(0, 4)}
            </Text>
            <Text style={{ color: "#DDD", fontSize: 10 }}>|</Text>
            <Text style={styles.duration}>{item.runtime} mins</Text>
            <Text style={{ color: "#DDD", fontSize: 10 }}>|</Text>

            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={10} color="#F7CC49" />
              <Text style={styles.averageRating}>
                {item.vote_average.toFixed(1)}/10
              </Text>
            </View>
          </View>

          <Text style={styles.genre}>
            {item.genres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather
            name="trash-2"
            size={18}
            color="#FB4737"
            onPress={() => removeMovie(item.id)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Search /> */}
      <FlatList
        data={savedMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  releaseDate: {
    color: "#9d9d9d",
    fontSize: 10,
  },
  genre: {
    color: "#9d9d9d",
    fontSize: 10,
  },
  duration: {
    color: "#9d9d9d",
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  averageRating: {
    color: "#DDD",
    fontSize: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 20,
    marginTop: 20,
    width: "100%",
  },
  movieItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#1E202A",
    padding: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  posterImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 5,
  },
  movieDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#DDD",
    marginBottom: 6,
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default SavedMovies;
