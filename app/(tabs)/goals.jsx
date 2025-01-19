import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import GoalContent from "../../components/GoalContent";

const Goals = () => {
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
                  fontSize: 30,
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
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                  opacity: 0.5,
                }}
              >
                <Text className="font-pmedium" style={{}}>
                  Day 98
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                  opacity: 0.75,
                }}
              >
                <Text className="font-pmedium" style={{}}>
                  Day 99
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{ fontSize: 18 }}>
                  Day 100
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#c0c0c0",
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{}}>
                  Day 101
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "grey",
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                }}
              >
                <Text className="font-pmedium" style={{}}>
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
                {" "}
                Create a new goal{" "}
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>+</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" bg-white w-100 flex-1 rounded-t-3xl p-2">
          <GoalContent />
        </View>
      </View>
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
