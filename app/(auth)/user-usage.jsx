import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { images } from "../../constants";
const UsageIndicator = () => {
  const [currentValue, setCurrentValue] = useState(3);

  return (
    <ScrollView className="w-full p-4">
      <View className=" p-8 h-full flex-col justify-between">
        <View>
          <TouchableOpacity
            className="p-4 bg-white w-12 h-12 rounded-xl mb-10"
            style={{
              shadowOpacity: 0.05,
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Image source={images.leftarrow}></Image>
          </TouchableOpacity>
          <Text className="text-4xl font-psemibold">
            How Much Do You Use in a Typical Session?
          </Text>
          <Text className="pt-2 text-gray-500 font-pregular">
            How Much Do You Use in a Typical Session?
          </Text>
        </View>
      </View>
      <View className="flex justify-center items-center ">
        <Slider
          style={{ width: "85%" }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={currentValue}
          onValueChange={setCurrentValue}
          minimumTrackTintColor="#87E64C"
          maximumTrackTintColor="#D1D5DB"
          thumbTintColor="#87E64C"
        />
        <Text className="text-center text-lg font-semibold mt-2">
          {currentValue} (drinks/unit)
        </Text>
      </View>
    </ScrollView>
  );
};

export default UsageIndicator;
