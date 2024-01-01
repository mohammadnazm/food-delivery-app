import React from "react";
import { Text, ScrollView } from "react-native";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <Text>Categories Hello</Text>
    </ScrollView>
  );
};

export default Categories;
