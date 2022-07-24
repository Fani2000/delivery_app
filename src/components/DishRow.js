import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { formatCurrency } from "react-native-format-currency";
import { urlFor } from "../../sanity";
import { MinusCircleIcon } from "react-native-heroicons/solid";
import { PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleQuantity = () => {
    setIsPressed(true);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleQuantity}
        className={`bg-white border p-4 border-gray-200  ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">
              {formatCurrency({ amount: price, code: "ZAR" })[0]}
            </Text>
          </View>
          <View>
            <Image
              style={{ borderColor: "#F3F3F3", borderWidth: 1 }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity>
              <MinusCircleIcon
                // color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                // color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
