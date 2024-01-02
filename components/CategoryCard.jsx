import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <View style={styles.container}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "relative",
    marginRight: 5.8,
  },
  container: {
    // You can add additional styles for the container if needed
  },
  image: {
    width: 75,
    height: 67,
    // borderRadius: 25,
  },
  title: {
    position: "absolute",
    bottom: 1,
    left: 1,
    color: "white",
    fontWeight: "bold",
  },
});

export default CategoryCard;
