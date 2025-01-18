import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const TabsLayout = () => {
  return (
    <View>
      <Text>TabsLayout</Text>
    </View>
  );
};

const TabScreen = () => {
  const [selectedTab, setSelectedTab] = React.useState("Daily Goals");

  const tabMenus = [
    { title: "Daily Goals" },
    { title: "Weakly Goals" },
    { title: "Monthly Goals" },
  ];

  return (
    <View
      style={{
        paddingVertical: 20,
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#113940",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
      >
        {tabMenus.map((menu, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTab(menu.title)}
            style={{
              padding: 10,
              borderRadius: 100,
              backgroundColor:
                selectedTab === menu.title ? "#87E64C" : "#1A5560",
            }}
          >
            <Text
              key={index}
              style={{
                color: selectedTab === menu.title ? "#000" : "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{ height: 2, backgroundColor: "#277A89", width: "90%" }}
      ></View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#113940",
        }}
      >
        {selectedTab === "Daily Goals" && (
          <Text style={{ color: "#fff" }}>Daily Goals</Text>
        )}
        {selectedTab === "Weakly Goals" && (
          <Text style={{ color: "#fff" }}>Weakly Goals</Text>
        )}
        {selectedTab === "Monthly Goals" && (
          <Text style={{ color: "#fff" }}>Monthly Goals</Text>
        )}
      </View>
    </View>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
