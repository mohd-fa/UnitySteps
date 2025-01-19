import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { images } from "../constants";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

const ExpertList = () => {
  const [selectedTab, setSelectedTab] = React.useState("All");

  const tabMenus = [{ title: "All" }, { title: "Human" }, { title: "AI" }];
  return (
    <View>
      {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={images.placeholder}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            margin: 10,
          }}
        />
      </View> */}
      <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
        {tabMenus.map((menu, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTab(menu.title)}
            style={{
              padding: 10,
              minWidth: 50,
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
                textAlign: "center",
              }}
            >
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ padding: 10, gap: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { ai: false, name: "John Doe" },
              })
            }
            style={{
              flex: 1,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "grey",
              overflow: "hidden",
            }}
          >
            <Image
              source={images.placeholder}
              resizeMode="cover"
              style={{ width: "150%" }}
            ></Image>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "60%",
                bottom: 0,
                backgroundColor: "#fff",
                borderRadius: 20,
                borderTopWidth: 5,
                borderColor: "#87E64C",
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: "Bold", fontSize: 20 }}>John Doe</Text>
              <Text style={{ fontSize: 18 }}>Clinical Psycologist, PhD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { ai: false, name: "John Doe" },
              })
            }
            style={{
              flex: 1,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "grey",
              overflow: "hidden",
            }}
          >
            <Image
              source={images.placeholder}
              resizeMode="cover"
              style={{ width: "150%" }}
            ></Image>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "60%",
                bottom: 0,
                backgroundColor: "#fff",
                borderRadius: 20,
                borderTopWidth: 5,
                borderColor: "#87E64C",
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: "Bold", fontSize: 20 }}>John Doe</Text>
              <Text style={{ fontSize: 18 }}>Clinical Psycologist, PhD</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { ai: false, name: "John Doe" },
              })
            }
            style={{
              flex: 1,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "grey",
              overflow: "hidden",
            }}
          >
            <Image
              source={images.placeholder}
              resizeMode="cover"
              style={{ width: "150%" }}
            ></Image>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "60%",
                bottom: 0,
                backgroundColor: "#fff",
                borderRadius: 20,
                borderTopWidth: 5,
                borderColor: "#87E64C",
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: "Bold", fontSize: 20 }}>John Doe</Text>
              <Text style={{ fontSize: 18 }}>Clinical Psycologist, PhD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/chat",
                params: { ai: true },
              })
            }
            style={{
              flex: 1,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "grey",
              overflow: "hidden",
            }}
          >
            <Image
              source={images.gemini}
              resizeMode="contain"
              style={{ width: "100%" }}
            ></Image>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "60%",
                bottom: 0,
                backgroundColor: "#fff",
                borderRadius: 20,
                borderTopWidth: 5,
                borderColor: "#87E64C",
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: "Bold", fontSize: 20 }}>
                Ai Rehab Support
              </Text>
              <Text style={{ fontSize: 18 }}>The Genuine Listener</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputOutlined: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e5e7eb",
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 30,
    flex: 1,
  },
});

export default ExpertList;
