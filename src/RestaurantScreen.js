import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "./components/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      address,
      genre,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-8 left-4 p-2 bg-gray-100 rounded-full"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" size={22} opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon color="gray" size={22} opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby - {address}</Text>
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y">
          <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {/* Dishes */}
        {dishes.map((dish) => {
          {
            /* return <Text>{dish.name}</Text>; */
          }
          return (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
