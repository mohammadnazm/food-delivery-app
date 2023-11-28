import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* Header */}
        <View>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
