import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Categories = () => {
  const categories = [
    {
      id: 28,
      name: "Action",
      emoji: "😄",
    },
    {
      id: 12,
      name: "Adventure",
      emoji: "😃",
    },
    {
      id: 16,
      name: "Animation",
      emoji: "😊",
    },
    {
      id: 35,
      name: "Comedy",
      emoji: "😆",
    },
    {
      id: 80,
      name: "Crime",
      emoji: "😎",
    },
    {
      id: 99,
      name: "Documentary",
      emoji: "📽️",
    },
    {
      id: 18,
      name: "Drama",
      emoji: "😢",
    },
    {
      id: 10751,
      name: "Family",
      emoji: "👪",
    },
    {
      id: 14,
      name: "Fantasy",
      emoji: "🧙‍♂️",
    },
    {
      id: 36,
      name: "History",
      emoji: "📜",
    },
    {
      id: 27,
      name: "Horror",
      emoji: "👻",
    },
    {
      id: 10402,
      name: "Music",
      emoji: "🎵",
    },
    {
      id: 9648,
      name: "Mystery",
      emoji: "🔍",
    },
    {
      id: 10749,
      name: "Romance",
      emoji: "💑",
    },
    {
      id: 878,
      name: "Science Fiction",
      emoji: "🚀",
    },
    {
      id: 10770,
      name: "TV Movie",
      emoji: "📺",
    },
    {
      id: 53,
      name: "Thriller",
      emoji: "😱",
    },
    {
      id: 10752,
      name: "War",
      emoji: "⚔️",
    },
    {
      id: 37,
      name: "Western",
      emoji: "🤠",
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    console.log("Category pressed:", category.name);
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
});

export default Categories;
