import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>
        {/* Header */}
        <View>
          <Image source={{ uri: "https://links.papareact.com/wru" }} />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
