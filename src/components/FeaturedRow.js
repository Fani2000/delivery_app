import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  // console.log(id);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id =="${id}"]{
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> ,
    type->{
      name
    }
  }
}
    `
      )
      .then((data) => {
        // console.log(data[0]?.restaurants);
        setRestaurants(data[0]?.restaurants);
      });
  }, []);

  console.log(restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant card */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUrl={restaurant.image}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            shortDescription={restaurant.shot_description}
            dishes={restaurant.dishes}
            long={restaurant.lat}
            lat={restaurant.lng}
          />
        ))}
        {/* <RestaurantCard
          id="123"
          title="Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a testing data"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          title="Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a testing data"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          title="Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a testing data"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
