import React, { useState } from "react";
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
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Reviews from "../components/Reviews";

function MovieDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { movie_id } = route.params;
  console.log(movie_id);

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

  const [reviews, setReviews] = useState([
    {
      author: "Chris Sawin",
      author_details: {
        name: "Chris Sawin",
        username: "ChrisSawin",
        avatar_path:
          "/https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg",
        rating: 5,
      },
      content:
        "_The Super Mario Bros. Movie_ is like Fruit Stripe Gum. It’s super colorful and eyecatching, but it seems to instantly lose its flavor and charm. The film is visually stunning and Jack Black is outstanding as Bowser. The big action sequences are like big budget versions of the Mario video games playthroughs with little welcome surprises thrown in.\r\n\r\nBut the film is massively unfunny, the characters are extremely flat, and the flimsy writing is about as complex as an unkempt mustache.\r\n\r\n**Full review:** https://boundingintocomics.com/2023/04/06/the-super-mario-bros-movie-review-plunging-rainbow-colored-nostalgia-to-death/",
      created_at: "2023-04-06T20:38:59.988Z",
      id: "642f2de32588230098248468",
      updated_at: "2023-04-06T20:39:00.115Z",
      url: "https://www.themoviedb.org/review/642f2de32588230098248468",
    },
    {
      author: "CinemaSerf",
      author_details: {
        name: "CinemaSerf",
        username: "Geronimo1967",
        avatar_path: "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
        rating: 6,
      },
      content:
        'I am not the demographic and to be honest this isn\'t really a film that I was ever going to like either. The story is beyond simple and the game-based animation - though expertly crafted - did absolutely nothing for me as ninety minutes rolled along devoid of characterisations, thrill or much sense of adventure. I got the feeling this was really an outing for "Mario", "Luigi" and "Peach" designed to satisfy the die-hard fans, or the children - or both, but if you were not in on the game from the start then you are unlikely to have become any more engaged by the end of this fungi-fest. It wouldn\'t be fair to say this is bland - it\'s not designed to challenge or take risks: it\'s fun for those who grew up with "Mario" et al in their lives and I\'m not going to decry that. It\'s colourful, pacy, and at times quite well written but perhaps it ought to have a rating that says if you are over 12 then you should be advised against it?',
      created_at: "2023-04-13T13:19:08.627Z",
      id: "6438014c1d538600f40f4d4e",
      updated_at: "2023-04-13T13:19:08.722Z",
      url: "https://www.themoviedb.org/review/6438014c1d538600f40f4d4e",
    },
    {
      author: "MSB",
      author_details: {
        name: "MSB",
        username: "msbreviews",
        avatar_path:
          "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
        rating: 8,
      },
      content:
        "FULL SPOILER-FREE REVIEW @ https://www.firstshowing.net/2023/review-illuminations-super-mario-bros-movie-left-a-me-so-happy/\r\n\r\n\"The Super Mario Bros. Movie delivers everything I wanted. Packed with fantastic references that will warm the hearts of those who lived and still live with Nintendo and Mario up close. Along with energetic action, dazzling animation and world-building, and iconic music – Brian Tyler's score goes straight into my Spotify playlist. Mario and Co. marked my childhood, and, still today, continue to offer me wonderful memories for life. As a viewer clearly belonging to the target audience, I couldn't have left the cinema more joyful. Ya-hoo!\"\r\n\r\nRating: A-",
      created_at: "2023-04-14T18:36:26.281Z",
      id: "64399d2a7ef3810522626d9c",
      updated_at: "2023-04-14T18:36:26.428Z",
      url: "https://www.themoviedb.org/review/64399d2a7ef3810522626d9c",
    },
  ]);

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

        <Reviews reviews={reviews} />
      </ScrollView>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab]}>
          <Text style={[styles.tabText]}>Play Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 300,
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
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#0D1117",
    paddingVertical: 10,
    marginTop: 20,
    justifyContent: "flex-start",
    gap: 30,
    paddingHorizontal: 20,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {},
  tabText: {
    color: "#7D7C7B",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#FBEC33",
  },
});

export default MovieDetails;
