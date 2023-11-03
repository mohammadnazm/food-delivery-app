import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  safeAreaView: {
    /* Add styles for SafeAreaView here */
  },
  textRed: {
    color: "#EF4444", // You can replace this with the appropriate shade of red
  },
  view: {
    /* Add styles for View here */
  },
  image: {
    /* Add styles for Image here */
    height: 70, // You can adjust the height as needed
    width: 70, // You can adjust the width as needed
    backgroundColor: "#D1D5DB", // You can adjust the background color as needed
    padding: 10, // You can adjust the padding as needed
    borderRadius: 50, // This creates a circle, adjust as needed
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.textRed}>
        {/* Header */}
        <View style={styles.view}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={styles.image}
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
