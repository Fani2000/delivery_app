import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../../sanity";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == "category"]`
      )
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  // console.log(categories[0]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 18,
        paddingHorizontal: 15,
      }}
    >
      {categories?.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name}
          />
        );
      })}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" /> */}
    </ScrollView>
  );
};

export default Categories;
