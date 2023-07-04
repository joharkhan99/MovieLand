import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Reviews({ reviews }) {
  const getAvatarSource = (avatarPath) => {
    if (avatarPath.startsWith("/https://")) {
      return { uri: avatarPath.replace("/https://", "https://") };
    } else {
      return { uri: "https://image.tmdb.org/t/p/w500" + avatarPath };
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#DDD",
          fontSize: 18,
          fontWeight: "700",
          paddingBottom: 20,
        }}
      >
        Reviews
      </Text>
      {reviews.map((review) => (
        <View style={styles.reviewContainer} key={review.id}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={getAvatarSource(review.author_details.avatar_path)}
              style={styles.userImage}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.username}>
                {review.author_details.username}
              </Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={15} color="#F7CC49" />
                <Text style={styles.averageRating}>
                  {review.author_details.rating.toFixed(1)}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.reviewText}>{review.content}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  averageRating: {
    color: "#8D8C8B",
    marginRight: 5,
    fontSize: 12,
  },
  container: {
    marginTop: 20,
    padding: 20,
  },
  reviewContainer: {
    // flexDirection: "row",
    marginBottom: 40,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewContent: {
    marginLeft: 10,
    justifyContent: "center",
  },
  username: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#DDD",
  },
  rating: {
    fontSize: 14,
    color: "#7D7C7B",
  },
  reviewText: {
    marginTop: 15,
    color: "#bfbfbf",
    fontSize: 13,
  },
});

export default Reviews;
