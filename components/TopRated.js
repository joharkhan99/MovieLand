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

const TopRated = () => {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      genre_ids: [18, 80],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 132.844,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.7,
      vote_count: 18157,
    },
    {
      adult: false,
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      genre_ids: [18, 80],
      id: 278,
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      popularity: 93.368,
      poster_path: "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
      release_date: "1994-09-23",
      title: "The Shawshank Redemption",
      video: false,
      vote_average: 8.7,
      vote_count: 24039,
    },
    {
      adult: false,
      backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      genre_ids: [18, 80],
      id: 240,
      original_language: "en",
      original_title: "The Godfather Part II",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      popularity: 81.766,
      poster_path: "/bMadFzhjy9T7R8J48QGq1ngWNAK.jpg",
      release_date: "1974-12-20",
      title: "The Godfather Part II",
      video: false,
      vote_average: 8.6,
      vote_count: 10959,
    },
    {
      adult: false,
      backdrop_path: "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
      genre_ids: [35, 18, 10749],
      id: 19404,
      original_language: "hi",
      original_title: "दिलवाले दुल्हनिया ले जायेंगे",
      overview:
        "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      popularity: 34.844,
      poster_path: "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
      release_date: "1995-10-20",
      title: "Dilwale Dulhania Le Jayenge",
      video: false,
      vote_average: 8.6,
      vote_count: 4157,
    },
  ]);
  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

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
        <Text style={styles.title}>Top Rated</Text>
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

export default TopRated;
