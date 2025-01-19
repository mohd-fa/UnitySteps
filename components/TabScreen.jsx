import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { images } from "../constants";

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
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#113940",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
          gap: 4,
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
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: "#277A89",
          width: "100%",
          marginVertical: 20,
        }}
      ></View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#113940",
        }}
      >
        {selectedTab === "Daily Goals" && (
          <View className="w-100">
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,

                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Practice mindfulness for 5 minutes.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: 10,
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Try a guided meditation session.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#87E64C",
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
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
                View More
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {selectedTab === "Weakly Goals" && (
          <View className="w-100">
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,

                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Practice mindfulness for 5 minutes.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                marginBottom: 10,
                alignItems: "center",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Try a guided meditation session.
              </Text>
            </View>
          </View>
        )}
        {selectedTab === "Monthly Goals" && (
          <View className="w-100">
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,

                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Practice mindfulness for 5 minutes.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: 10,
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#87E64C",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Image
                  source={images.meditation}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </View>
              <Text style={{ color: "#000", marginLeft: 15, fontSize: 14 }}>
                Try a guided meditation session.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
