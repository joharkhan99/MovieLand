import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  const API_KEY = Constants.manifest.extra.API_KEY;
  const API_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const emojies = {
    Action: "😄",
    Adventure: "😃",
    Animation: "😊",
    Comedy: "😆",
    Crime: "😎",
    Documentary: "📽️",
    Drama: "😢",
    Family: "👪",
    Fantasy: "🧙‍♂️",
    History: "📜",
    Horror: "👻",
    Music: "🎵",
    Mystery: "🔍",
    Romance: "💑",
    "Science Fiction": "🚀",
    "TV Movie": "📺",
    Thriller: "😱",
    War: "⚔️",
    Western: "🤠",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedCategories = await getCachedCategories();

        if (cachedCategories) {
          setCategories(cachedCategories);
        } else {
          const response = await fetch(API_URL, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          });
          const data = await response.json();
          const fetchedCategories = data.genres;
          setCategories(fetchedCategories);
          cacheCategories(fetchedCategories);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const getCachedCategories = async () => {
    try {
      const cachedData = await AsyncStorage.getItem("categories");
      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      console.error("Error retrieving cached categories:", error);
      return null;
    }
  };

  const cacheCategories = async (categories) => {
    try {
      await AsyncStorage.setItem("categories", JSON.stringify(categories));
    } catch (error) {
      console.error("Error caching categories:", error);
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.emoji}>{emojies[item.name]}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    navigation.navigate("All", {
      type: "Category",
      cat_name: category.name,
      cat_id: category.id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#1E202A",
    paddingVertical: 0,
    borderRadius: 5,
    paddingBottom: 7,
    width: 100,
    shadowColor: "#0D1117",
    elevation: 20,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  emoji: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 13,
    color: "#ddd",
    fontWeight: "500",
  },
  title: {
    color: "#DDD",
    fontSize: 17,
    fontWeight: "700",
    paddingBottom: 20,
  },
});

export default Categories;
