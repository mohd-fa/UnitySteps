import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../constants";

const Energy = () => {
  return (
    <TouchableOpacity
      className=" flex justify-center self-center items-center"
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: 100,
        padding: 5,
        width: 90,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 10,
      }}
    >
      <View className="flex flex-row items-center justify-center ">
        <Image source={images.energy} style={{ width: 20, height: 20 }} />
        <Text className="m-6">1023pts</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Energy;
