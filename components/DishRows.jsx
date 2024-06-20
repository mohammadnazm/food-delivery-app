import { View, Text } from "react-native";
import React from "react";

const DishRows = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white">
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">
          <Currency quantity={price} currency="GBP" />
        </Text>
      </View>
      <View>
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{
            uri: urlFor(image).url(),
          }}
          className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
    </TouchableOpacity>
  );
};

export default DishRows;
