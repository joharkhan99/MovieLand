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

const NowPlaying = () => {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 4714.532,
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 7.3,
      vote_count: 2313,
    },
    {
      adult: false,
      backdrop_path: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      genre_ids: [28, 12, 16, 878],
      id: 569094,
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      popularity: 2118.109,
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-05-31",
      title: "Spider-Man: Across the Spider-Verse",
      video: false,
      vote_average: 8.6,
      vote_count: 1935,
    },
    {
      adult: false,
      backdrop_path: "/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
      genre_ids: [28, 53],
      id: 697843,
      original_language: "en",
      original_title: "Extraction 2",
      overview:
        "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      popularity: 2257.02,
      poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      release_date: "2023-06-09",
      title: "Extraction 2",
      video: false,
      vote_average: 7.6,
      vote_count: 1084,
    },
    {
      adult: false,
      backdrop_path: "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 1799.054,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.8,
      vote_count: 5318,
    },
  ]);
  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

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
    <View
      style={[
        styles.itemContainer,
        { width: 150, borderColor: "white", borderWidth: 3 },
      ]}
    >
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
        style={styles.image}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  const handleCategoryPress = (category) => {
    console.log("Category pressed:", category.name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        // snapToAlignment="start"
        // snapToInterval={width - 32}
        decelerationRate="fast"
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#1E202A",
    paddingVertical: 0,
    borderRadius: 5,
    paddingBottom: 7,
    paddingHorizontal: 0,
    width: 100,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 13,
    color: "#7D7C7B",
    fontWeight: 500,
  },
  title: {
    color: "#DDD",
    fontSize: 17,
    fontWeight: 700,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    paddingHorizontal: 8,
    alignItems: "center",
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

export default NowPlaying;
