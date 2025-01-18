import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-3xl">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/home">
        <Text className="text-blue-500">Go to Home</Text>
      </Link>
    </View>
  );
}
