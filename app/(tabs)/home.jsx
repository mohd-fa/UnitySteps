import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabScreen from "../../components/TabScreen";
import DashboardMenu from "../../components/DashboardMenu";

const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "#174952" }}>
      <SafeAreaView style={styles.page}>
        <View style={styles.cirle1}>
          <View style={styles.cirle2}></View>
        </View>
        <View style={styles.cirle3}>
          <View style={styles.cirle4}></View>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.welcomeText}>Welcome Ryan</Text>

            <Text style={styles.infoText}>
              You have been sober for &nbsp;
              <Text style={styles.primaryText}>10 Days!</Text>
            </Text>
            <Text style={styles.infoSubtitle}>
              You’re making progress — don’t stop now!
            </Text>
          </View>
          <TabScreen />
        </View>
        <View className="bg-white w-100 flex-1 rounded-t-3xl p-2">
          <DashboardMenu />
        </View>
        <View style={{ backgroundColor: "#fff", height: 50 }}> </View>
      </SafeAreaView>
    </ScrollView>
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
  page: { backgroundColor: "#174952" },

  primaryText: {
    color: "#87E64C",
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  infoText: {
    fontSize: 24,
    marginTop: 20,
    color: "#fff",
  },
  infoSubtitle: {
    fontSize: 16,
    color: "#D6D6D6",
  },

  goalsContainer: {
    backgroundColor: "#113940",
    height: 200,
    borderRadius: 20,
  },
});
export default Home;
