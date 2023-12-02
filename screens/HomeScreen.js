import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
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
    <SafeAreaView>
      <Text className="text-red-500 mt-8">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location!
              <Icon name="chevron-down" size={20} color="#000" />
            </Text>
          </View>

          <Icon name="user" size={30} color="#000" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
