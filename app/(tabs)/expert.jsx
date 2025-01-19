import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import ExpertList from "../../components/ExpertList";

const Expert = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.cirle1}>
        <View style={styles.cirle2}></View>
      </View>
      <View style={styles.cirle3}>
        <View style={styles.cirle4}></View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.welcomeText}>Rehabilitation Specialists</Text>

            <Text style={styles.infoText}>
              Here is a list of Specialists who may be able to help you out.
            </Text>
          </View>
        </View>
        <View className=" bg-white w-100 flex-1 rounded-t-3xl p-2">
          <ExpertList />
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

export default Expert;
