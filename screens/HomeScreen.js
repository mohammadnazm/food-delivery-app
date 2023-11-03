import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const styles = StyleSheet.create({
  safeAreaView: {
    /* Add styles for SafeAreaView here */
  },
  textRed: {
    color: "#EF4444", // You can replace this with the appropriate shade of red
  },
  view: {
    /* Add styles for View here */
    flexDirection: "row",
    paddingBottom: 3,
    alignItems: "center",
    marginHorizontal: 4,
    justifyContent: "space-between",
    marginLeft: 0, // Add left margin here
  },
  image: {
    /* Add styles for Image here */
    height: 50, // You can adjust the height as needed
    width: 50, // You can adjust the width as needed
    backgroundColor: "#D1D5DB", // You can adjust the background color as needed
    padding: 10, // You can adjust the padding as needed
    borderRadius: 50, // This creates a circle, adjust as needed
  },
  deliveryText: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 14,
  },
  locationText: {
    fontWeight: "bold",
    fontSize: 26,
    color: "black",
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.textRed}>
        {/* Header */}
        <View style={styles.view}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={styles.image}
          />
          <View style={{ marginLeft: 14 }}>
            <Text style={styles.deliveryText}>Deliver Now!</Text>
            <Text style={styles.locationText}>
              Current Location <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
