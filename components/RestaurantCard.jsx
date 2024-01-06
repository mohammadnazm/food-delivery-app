import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          {/* Star Icon */}
          <Icon name="star" size={22} color="green" style={{ opacity: 0.7 }} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">
              {rating} . {genre}
            </Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          {/* Location Marker Icon */}
          <Icon
            name="map-marker"
            size={30}
            color="red"
            style={{ opacity: 0.4 }}
          />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
