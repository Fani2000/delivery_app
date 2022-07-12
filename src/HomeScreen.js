import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // });

  return (
    <SafeAreaView>
      <View className=" bg-gray-800 h-full w-full">
        {/* <Text className="text-red-500">HomeScreen</Text> */}
        {/* Image */}
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        {/*  */}
      </View>
      <StatusBar style={"dark"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
