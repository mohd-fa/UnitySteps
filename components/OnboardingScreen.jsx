import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const titleOpacity = useSharedValue(0);
  const imageTranslation = useSharedValue(width);

  // Animation setup
  useEffect(() => {
    titleOpacity.value = withTiming(1, { duration: 1000 });
    imageTranslation.value = withSequence(
      withDelay(500, withTiming(0, { duration: 1000 })),
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
  }));

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: imageTranslation.value }],
  }));

  return (
    <View style={styles.container}>
      {/* <Animated.Image */}
      {/*   source={require("./assets/onboarding.png")} */}
      {/*   style={[styles.image, imageStyle]} */}
      {/* /> */}
      <Animated.Text style={[styles.title, titleStyle]}>
        Welcome to the App!
      </Animated.Text>
      <Text
        style={styles.subtitle}
        onPress={() => navigation.replace("(tabs)")}
      >
        Get Started →
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#007AFF",
    marginTop: 20,
  },
});

export default OnboardingScreen;
