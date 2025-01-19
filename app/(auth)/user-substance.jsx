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
const userSubstance = () => {
  const [selected, setSelected] = useState({
    Alcohol: false,
    Tobacco: false,
    Cannabis: false,
    PrescriptionDrugs: false,
    IllicitDrugs: false,
    Other: false,
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
              Which Substance Are You Struggling With?
            </Text>
            <Text className="pt-2 text-gray-500 font-pregular">
              Select all that apply. This helps us tailor your experience and
              connect you with the right resources.
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
                  <Text className=" font-pmedium text-lg">
                    {key === "Alcohol" && "Alcohol"}
                    {key === "Tobacco" && "Tobacco/Nicotine"}
                    {key === "Cannabis" && (
                      <>
                        Cannabis
                        <Text className="text-xs text-gray-500">
                          (Marijuana)
                        </Text>
                      </>
                    )}
                    {key === "PrescriptionDrugs" && (
                      <>
                        Prescription Drugs
                        <Text className="text-xs">
                          (e.g., opioids, benzodiazepines)
                        </Text>
                      </>
                    )}
                    {key === "IllicitDrugs" && (
                      <>
                        Illicit Drugs
                        <Text className="text-xs">
                          (e.g., cocaine, heroin, methamphetamine)
                        </Text>
                      </>
                    )}
                    {key === "Other" && "Other (Please specify)"}
                  </Text>
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
export default userSubstance;
