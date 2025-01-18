import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import TabScreen from "./TabScreen";
import { images } from "../constants";

const DashboardMenu = () => {
  const [selectedTab, setSelectedTab] = React.useState("For You");

  const tabMenus = [
    { title: "For You" },
    { title: "Featured" },
    { title: "Recent" },
  ];

  const articles = [
    {
      title: "I Relapsed After 6 Months Sober—Here’s How I Got Back on Track",
      content:
        "I thought I had it all under control. Six months sober, feeling great, and then BAM—I found myself at a party with a drink in my hand. The guilt was overwhelming, but instead of spiraling, I reached out to my counselor and this community. You all reminded me that recovery isn’t a straight line. ",
      likes: 564,
      comments: 16,
    },
    {
      title: "I Relapsed After 6 Months Sober—Here’s How I Got Back on Track",
      content:
        "I thought I had it all under control. Six months sober, feeling great, and then BAM—I found myself at a party with a drink in my hand. The guilt was overwhelming, but instead of spiraling, I reached out to my counselor and this community. You all reminded me that recovery isn’t a straight line. ",
      likes: 564,
      comments: 16,
    },
  ];
  return (
    <View>
      <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
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

      <View style={{ flex: 1, marginTop: 5, margin: 10, gap: 10 }}>
        {articles.map((item, index) => (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "grey",
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={images.placeholder}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  textAlign: "justify",
                }}
              >
                {item.title}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "justify",
                  paddingHorizontal: 5,
                  fontSize: 16,
                }}
              >
                {item.content}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <View
                className="p-1 border"
                style={{
                  borderRadius: 50,
                  flexDirection: "row",
                  borderColor: "grey",

                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.like}
                  style={{
                    width: 25,

                    marginRight: 10,
                  }}
                />
                <Text style={{ fontWeight: "bold" }}>{item.likes}</Text>
              </View>
              <View
                className="p-1 border"
                style={{
                  borderRadius: 50,
                  borderColor: "grey",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={images.comment}
                  resizeMode="contain"
                  style={{
                    height: 25,

                    marginRight: 10,
                  }}
                />
                <Text style={{ fontWeight: "bold" }}>{item.comments}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DashboardMenu;
