import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const API_KEY = Constants.manifest.extra.API_KEY;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1&include_adult=false`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const movieDetails = (id) => {
    navigation.navigate("MovieDetails", { movie_id: id });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => movieDetails(item.id)} activeOpacity={0.7}>
      <View style={styles.movieContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.movieImage}
        />
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <View style={styles.ratings}>
            <Text style={styles.movieRating}>
              {item.release_date.substring(0, 4)}
            </Text>

            <Text style={styles.movieRating}>|</Text>

            <FontAwesome name="star" size={12} color="#F7CC49" />
            <Text style={styles.movieRating}>
              {item.vote_average.toFixed(1)}/10
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search movies"
          value={query}
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={handleSearch}
          placeholderTextColor={"rgb(147 ,149, 171)"}
        />

        <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
          <AntDesign name="search1" size={20} color={"#aaa"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchResults}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1117",
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#3D3F56",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: "#aaa",
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  movieContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  movieImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 5,
  },
  movieDetails: {
    flex: 1,
    justifyContent: "center",
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 12,
    color: "#DDD",
  },
  ratings: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#DDD",
    fontSize: 19,
    fontWeight: 500,
    marginVertical: 20,
  },
});

export default Search;
