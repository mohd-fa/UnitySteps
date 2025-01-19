import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { images } from "../../constants";
import { useState } from "react";
const userFrequency = () => {
  const [selected, setSelected] = useState({
    Daily: false,
    "Several times a week": false,
    "Once a week": false,
    "A few times a month": false,
    Rarely: false,
    "Not applicable": false,
  });

  const toggleRadiobox = (key) => {
    setSelected((prev) => {
      const newState = Object.keys(prev).reduce((acc, item) => {
        acc[item] = false;
        return acc;
      }, {});

      newState[key] = true;

      return newState;
    });
  };

  return (
    <SafeAreaView className="bg-[F7F8FA] h-full">
      <ScrollView>
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
              How Often Do You Use ?
            </Text>
            <Text className="pt-2 text-gray-500 font-pregular">
              This helps us understand your current habits.
            </Text>
            {/* Check Box Code */}
            <View className="justify-center items-center bg-gray-100 py-4 gap-1">
              {Object.entries(selected).map(([key, value]) => (
                <TouchableOpacity
                  key={key}
                  className={`${
                    value ? "border-black " : "border-gray-300   "
                  } w-full border-2 rounded-lg p-4`}
                  onPress={() => toggleRadiobox(key)}
                >
                  <Text className=" font-pmedium text-lg">{key}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View className="flex-row justify-between gap-1">
            <TouchableOpacity className="p-4 bg-gray-200 h-16 rounded-xl  w-1/2 flex justify-center items-center ">
              <Text className="text-black font-psemibold ">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-primary h-16 rounded-xl  w-1/2 flex justify-center items-center ">
              <Text className="text-black font-psemibold ">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default userFrequency;
