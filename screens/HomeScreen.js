import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Text></Text>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-10">
        {/* Left side */}
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="ml-2">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location!
              <Icon name="chevron-down" size={20} color="#00CCBB" />
            </Text>
          </View>
        </View>

        {/* Right side */}
        <Icon name="user" size={30} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3">
          <Icon name="search" size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Icon name="filter" size={30} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
