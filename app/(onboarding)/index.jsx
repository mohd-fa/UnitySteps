import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const PAGES = [
  {
    title: "Welcome to UnityStep",
    subtitle: "Your Journey to Recovery Starts Here!",
  },
  {
    title: "Understanding Recovery",
    subtitle: "Learn the stages and tips for a healthier life.",
  },
  {
    title: "Get Started",
    subtitle: "Begin your journey with Live Chat now!",
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleNext = () => {
    if (currentPage < PAGES.length - 1) {
      translateX.value = withTiming(-width * (currentPage + 1), {
        duration: 500,
      });
      setCurrentPage(currentPage + 1);
    } else {
      router.replace("sign-up"); // Replace with your home screen navigation
    }
  };

  return (
    <View style={styles.container}>
      {/* Animated Slider */}
      <Animated.View style={[styles.slider, animatedStyle]}>
        {PAGES.map((page, index) => (
          <View
            key={index}
            style={[styles.page, { backgroundColor: page.backgroundColor }]}
          >
            <View style={styles.header}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.subtitle}>{page.subtitle}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={page.image} style={styles.image} />
            </View>
          </View>
        ))}
      </Animated.View>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {PAGES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentPage === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Next/Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentPage === PAGES.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    flexDirection: "row",
    width: width * PAGES.length,
    height: height * 0.8,
  },
  page: {
    width,
    height: height * 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    marginBottom: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#053643",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "#87E64C",
    width: width * 0.8,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
