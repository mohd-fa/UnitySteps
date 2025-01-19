import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { images } from "../../constants";
const userDataCollectionPermission = () => {
  return (
    <SafeAreaView className="bg-[F7F8FA] h-full">
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
            Lets Understand Your &nbsp;
            <Text className=" text-secondary">Needs</Text>
          </Text>

          <Text className="pt-2 text-gray-500 font-pregular">
            This quick assessment will help us tailor your experience and
            connect you with the right resources. It’s completely confidential
            and takes about 5 minutes.
          </Text>
        </View>

        <TouchableOpacity className="p-4 bg-primary h-16 rounded-xl mb-10 w-full flex justify-center items-center mt-5">
          <Text className="text-black font-psemibold ">Start Assesment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default userDataCollectionPermission;
