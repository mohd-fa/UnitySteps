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
const userTrigger = () => {
  const [selected, setSelected] = useState({
    Stress: false,
    "Social situations": false,
    Boredom: false,
    "Emotional disress": false,
    Others: false,
  });

  const toggleCheckbox = (key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
              What Triggers Your Cravings?
            </Text>
            {/* Check Box Code */}
            <View className="justify-center items-center bg-gray-100 py-4 gap-1">
              {Object.entries(selected).map(([key, value]) => (
                <TouchableOpacity
                  key={key}
                  className={`${
                    value ? "border-black " : "border-gray-300   "
                  } w-full border-2 rounded-lg p-4`}
                  onPress={() => toggleCheckbox(key)}
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
export default userTrigger;
