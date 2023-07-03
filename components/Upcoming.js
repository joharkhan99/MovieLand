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

const Upcoming = () => {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      popularity: 1532.675,
      poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
      release_date: "2023-06-14",
      title: "Elemental",
      video: false,
      vote_average: 7.5,
      vote_count: 292,
    },
    {
      adult: false,
      backdrop_path: "/u17VLZqWFbeJsj1HpvB6QOOHvlC.jpg",
      genre_ids: [14, 28, 12],
      id: 455476,
      original_language: "en",
      original_title: "Knights of the Zodiac",
      overview:
        "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
      popularity: 1222.943,
      poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
      release_date: "2023-04-27",
      title: "Knights of the Zodiac",
      video: false,
      vote_average: 6.5,
      vote_count: 263,
    },
    {
      adult: false,
      backdrop_path: "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
      genre_ids: [28, 27, 53],
      id: 986070,
      original_language: "en",
      original_title: "The Wrath of Becky",
      overview:
        "Two years after she escaped a violent attack on her family, 16-year-old Becky attempts to rebuild her life in the care of an older woman -- a kindred spirit named Elena. However, when a violent group known as the Noble Men break into their home, attack them and take their beloved dog, Becky must return to her old ways to protect herself and her loved ones.",
      popularity: 1201.783,
      poster_path: "/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
      release_date: "2023-05-26",
      title: "The Wrath of Becky",
      video: false,
      vote_average: 6.7,
      vote_count: 60,
    },
  ]);
  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const { width } = Dimensions.get("window");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();
        // console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    // fetchData();
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

  const handleCategoryPress = (category) => {
    console.log("Category pressed:", category.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Upcoming</Text>
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
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default Upcoming;
