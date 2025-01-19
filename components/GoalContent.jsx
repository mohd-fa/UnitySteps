import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

import { images } from "../constants";

const GoalContent = ({ setSheetVisibility }) => {
  const [selectedTab, setSelectedTab] = React.useState("Daily Goals");

  const tabMenus = [
    { title: "Daily Goals" },
    { title: "Weakly Goals" },
    { title: "Monthly Goals" },
  ];
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
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
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
      <ScrollView>
        <View style={{ padding: 10, gap: 15 }}>
          <ScrollView
            horizontal={true}
            style={{
              flexDirection: "row",
              gap: 15,
              padding: 10,
              backgroundColor: "#eee",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
              <View
                style={{
                  width: 180,
                  height: 200,
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  margin: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#87E64C",
                    borderRadius: 100,
                    padding: 5,
                    width: "60",
                    height: "60",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={images.meditation}
                    style={{ height: 50, width: 50 }}
                  ></Image>
                </View>
                <Text
                  className="font-pmedium text-center"
                  style={{ fontSize: 16 }}
                >
                  Try a guided meditaion session
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
              <View
                style={{
                  margin: 10,
                  width: 180,
                  height: 200,
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#87E64C",
                    borderRadius: 100,
                    padding: 5,
                    width: "60",
                    height: "60",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={images.meditation}
                    style={{ height: 50, width: 50 }}
                  ></Image>
                </View>
                <Text
                  className="font-pmedium text-center"
                  style={{ fontSize: 16 }}
                >
                  Try a guided meditaion session
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
              <View
                style={{
                  width: 180,
                  margin: 10,
                  height: 200,
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#87E64C",
                    borderRadius: 100,
                    padding: 5,
                    width: "60",
                    height: "60",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={images.meditation}
                    style={{ height: 50, width: 50 }}
                  ></Image>
                </View>
                <Text
                  className="font-pmedium text-center"
                  style={{ fontSize: 16 }}
                >
                  Try a guided meditaion session
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text
            className="font-pbold "
            style={{ fontSize: 25, fontWeight: "bold", marginTop: 20 }}
          >
            All Goals
          </Text>
          <View
            style={{
              gap: 5,
              padding: 10,
              backgroundColor: "#eee",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSheetVisibility(true)}>
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
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

export default GoalContent;
