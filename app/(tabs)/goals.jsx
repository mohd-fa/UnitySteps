import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import GoalContent from "../../components/GoalContent";
import { BottomSheet } from "@rneui/themed";
import { Image } from "react-native";
import { images } from "@/constants";
import Energy from "@/components/energy";

const Goals = () => {
  const [sheetVisibility, setVisibility] = React.useState(false);
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.cirle1}>
        <View style={styles.cirle2}></View>
      </View>
      <View style={styles.cirle3}>
        <View style={styles.cirle4}></View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ padding: 20, justifyContent: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.welcomeText}>Goals</Text>

            <Text style={styles.infoText}>What are you working on Today?</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 5,
              borderRadius: 20,
              paddingHorizontal: 10,
              gap: 10,
              backgroundColor: "#113940",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: 10,
                }}
              >
                You Have Been
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: 10,
                }}
              >
                Sober for 100 Days!
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  opacity: 0.5,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 12 }}>
                  Day 98
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  opacity: 0.75,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 12 }}>
                  Day 99
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 12 }}>
                  Day 100
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#c0c0c0",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 12 }}>
                  Day 101
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "grey",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 12 }}>
                  Day 102
                </Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                borderRadius: 30,

                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                width: "fit-content",
                paddingHorizontal: 30,
                paddingVertical: 2,
              }}
            >
              <Text
                className="font-psemibold"
                style={{ color: "#000", fontSize: 18 }}
              >
                Create a new goal
                <Text style={{ fontSize: 16, fontWeight: "bold", padding: 5 }}>
                  +
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" bg-white w-100 flex-1 rounded-t-3xl p-2">
          <GoalContent setSheetVisibility={setVisibility} />
        </View>
      </View>
      <BottomSheet
        isVisible={sheetVisibility}
        onBackdropPress={() => setVisibility(false)}
      >
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            height: "600",
            padding: 20,
            paddingTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ alignSelf: "left", marginBottom: 10, fontSize: 16 }}>
            Monthly / &nbsp;
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Try a guided Meditation session
            </Text>
          </Text>
          <View
            style={{
              padding: 10,
              borderRadius: 100,
              backgroundColor: "#87E64C",
              // width: "80",
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Day 100
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: "#87E64C",
              borderRadius: 100,
              padding: 5,
              width: "150",
              height: "150",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.meditation}
              style={{ height: 100, width: 100 }}
            ></Image>
          </View>
          <Text className="font-pmedium text-center" style={{ fontSize: 16 }}>
            Try a guided meditaion session
          </Text>
          <Energy />
          <TouchableOpacity
            style={{
              backgroundColor: "#87E64C",
              padding: 10,
              margin: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 40,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: 14,
                paddingVertical: 5,
              }}
            >
              Mark as completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f00",
              padding: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                paddingVertical: 5,
              }}
            >
              Delete Goal
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cirle1: {
    position: "absolute",
    borderRadius: 500,
    backgroundColor: "#184F59",
    width: 400,
    height: 400,
    top: -150,
    left: -150,
  },
  cirle2: {
    position: "relative",
    borderRadius: 500,
    backgroundColor: "#1A5560",
    width: 370,
    height: 370,
  },
  cirle3: {
    position: "absolute",
    borderRadius: 500,
    backgroundColor: "#184F59",
    width: 400,
    height: 400,
    top: "50%",
    right: -150,
  },
  cirle4: {
    position: "relative",
    borderRadius: 500,
    backgroundColor: "#1A5560",
    width: 370,
    height: 370,
    top: 20,
    left: 20,
  },
  page: { flex: 1, backgroundColor: "#174952" },
  container: {
    flex: 1,
  },

  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  infoText: {
    fontSize: 20,
    marginTop: 20,
    color: "#fff",
  },

  container: {
    flex: 1,
  },
  goalsContainer: {
    backgroundColor: "#113940",
    height: 200,
    borderRadius: 20,
  },
});

export default Goals;
