import { TailwindProvider } from "tailwindcss-react-native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> ,
    type-> {
      name
    }
  }
}
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-6">
      <View className="flex-row items-center mt-4 px-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-1 flex-row items-center p-2 bg-gray-200 rounded-lg space-x-2">
          <SearchIcon />
          <TextInput
            className="flex-1"
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories component  */}
        <Categories />
        {/* Featured component  */}
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.show_description}
            />
          );
        })}
        {/* <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Paid placements from our partners"
          id="1234"
        />
        <FeaturedRow
          title="Offers near your"
          description="Paid placements from our partners"
          id="12345"
        /> */}
      </ScrollView>

      {/* <StatusBar style={"dark"} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
