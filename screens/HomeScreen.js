import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default HomeScreen;
