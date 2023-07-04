import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import Reviews from "../components/Reviews";
import Similar from "../components/Similar";
import Constants from "expo-constants";

function MovieDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { movie_id } = route.params;

  const [details, setDetails] = useState({
    adult: false,
    backdrop_path: "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
    belongs_to_collection: null,
    budget: 100000000,
    genres: [
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    homepage: "https://www.thesupermariobros.movie",
    id: 502356,
    imdb_id: "tt6718170",
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 1567.974,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    production_companies: [
      {
        id: 33,
        logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
        name: "Universal Pictures",
        origin_country: "US",
      },
      {
        id: 6704,
        logo_path: "/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png",
        name: "Illumination",
        origin_country: "US",
      },
      {
        id: 12288,
        logo_path: "/e4dQAqZD374H5EuM0W1ljEBWTKy.png",
        name: "Nintendo",
        origin_country: "JP",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "JP",
        name: "Japan",
      },
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2023-04-05",
    revenue: 1339203802,
    runtime: 93,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Let's-a go!",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.794,
    vote_count: 5346,
  });

  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

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
        setDetails(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [movie_id]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback onPress={handleBack}>
            <View style={styles.backButton}>
              <Ionicons
                name="arrow-back-sharp"
                size={20}
                color="white"
                style={styles.backIcon}
              />
            </View>
          </TouchableWithoutFeedback>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
            }}
            style={styles.posterImage}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{details.title}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={styles.releaseDate}>
              {details.release_date.substring(0, 4)}
            </Text>
            <Text style={{ color: "#DDD", fontSize: 13 }}>|</Text>
            <Text style={styles.duration}>{details.runtime} mins</Text>
            <Text style={{ color: "#DDD", fontSize: 13 }}>|</Text>

            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="#F7CC49" />
              <Text style={styles.averageRating}>
                {details.vote_average.toFixed(1)}/10
              </Text>
            </View>
          </View>

          <Text style={styles.genre}>
            {details.genres.map((genre) => genre.name).join(", ")}
          </Text>

          <Text style={styles.previewDescription}>{details.overview}</Text>
        </View>

        <Similar movie_id={movie_id} />

        <Reviews movie_id={movie_id} />
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.smallButton}>
          <Text>
            <Feather name="bookmark" size={22} color={"#DDD"} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Text style={{ fontWeight: 700, color: "#DDD" }}>Play Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 0,
    gap: 15,
    paddingHorizontal: 20,
  },
  smallButton: {
    width: 50,
    alignItems: "center",
    backgroundColor: "#1E202A",
    borderRadius: 5,
    paddingVertical: 10,
  },
  largeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E11A38",
    borderRadius: 5,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    // width: 24,
    // height: 24,
    backgroundColor: "rgba(61,63,86,0.7)",
    borderRadius: 100,
    padding: 10,
  },
  posterImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    // borderRadius: 8,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DDD",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  releaseDate: {
    color: "#9d9d9d",
    fontSize: 13,
  },
  genre: {
    color: "#9d9d9d",
    fontSize: 13,
  },
  duration: {
    color: "#9d9d9d",
    fontSize: 13,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    gap: 8,
    // marginTop: 10,
  },
  averageRating: {
    color: "#DDD",
    marginRight: 5,
    fontSize: 13,
  },
  previewDescription: {
    color: "#DDD",
    fontSize: 15,
    lineHeight: 20,
    marginTop: 20,
  },
});

export default MovieDetails;
