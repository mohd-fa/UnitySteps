import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import TabScreen from "./TabScreen";
import { images } from "../constants";
import { BottomSheet } from "@rneui/themed";

const DashboardMenu = () => {
  const [selectedTab, setSelectedTab] = React.useState("For You");
  const [sheetVisibility, setSheetVisibility] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  const tabMenus = [
    { title: "For You" },
    { title: "Featured" },
    { title: "Recent" },
  ];

  const articles = [
    {
      title: "I Relapsed After 6 Months Sober—Here's How I Got Back on Track",
      content:
        "I thought I had it all under control. Six months sober, feeling great, and then BAM—I found myself at a party with a drink in my hand. The guilt was overwhelming, but instead of spiraling, I reached out to my counselor and this community. You all reminded me that recovery isn't a straight line. \n\nThe journey back wasn't easy, but with support from my counselor and this amazing community, I found my footing again. Here's what helped me:\n\n1. Immediate accountability: I called my sponsor right away\n2. Returned to meetings: Doubled up on support groups\n3. Identified my triggers: The party environment was a bigger risk than I admitted\n4. Renewed commitment: Updated my recovery plan with new strategies\n\nRemember, a slip doesn't erase your progress. It's how you respond that matters.",
      likes: 564,
      comments: 16,
    },
    {
      title: "I Relapsed After 6 Months Sober—Here's How I Got Back on Track",
      content:
        "I thought I had it all under control. Six months sober, feeling great, and then BAM—I found myself at a party with a drink in my hand. The guilt was overwhelming, but instead of spiraling, I reached out to my counselor and this community. You all reminded me that recovery isn't a straight line. ",
      likes: 564,
      comments: 16,
    },
  ];

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
        {tabMenus.map((menu, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTab(menu.title)}
            style={{
              padding: 10,
              borderRadius: 100,
              backgroundColor: selectedTab === menu.title ? "#87E64C" : "#1A5560",
            }}
          >
            <Text
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

      <View style={{ flex: 1, marginTop: 5, margin: 10, gap: 10 }}>
        {articles.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedArticle(item);
              setSheetVisibility(true);
            }}
          >
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
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "justify",
                    flex: 1,
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={3}
                  style={{
                    textAlign: "justify",
                    paddingHorizontal: 5,
                    fontSize: 14,
                  }}
                >
                  {item.content}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  height: 50,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    flexDirection: "row",
                    borderColor: "grey",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 6,
                    marginTop: 10,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={images.like}
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    {item.likes}
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 50,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 6,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={images.comment}
                    resizeMode="contain"
                    style={{
                      height: 15,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    {item.comments}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <BottomSheet

        isVisible={sheetVisibility}
        onBackdropPress={() => setSheetVisibility(false)}
        containerStyle={{marginTop:100}}
      >
        <View
          style={{
            
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            maxHeight: "100%",
            padding: 20,
            paddingTop: 30,

          }}
        >
          <ScrollView>
          {selectedArticle && (
            <>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                <Image
                  source={images.placeholder}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>Author Name</Text>
                  <Text style={{ fontSize: 14, color: "#666" }}>2hr ago</Text>
                </View>
              </View>

              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                {selectedArticle.title}
              </Text>

              <Text style={{ fontSize: 16, lineHeight: 24, color: "#333" }}>
                {selectedArticle.content}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  gap: 15,
                  borderTopWidth: 1,
                  borderTopColor: "#eee",
                  paddingTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    padding: 8,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    source={images.like}
                    
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "500" }}>
                    {selectedArticle.likes}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    padding: 8,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    source={images.comment}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "500" }}>
                    {selectedArticle.comments}
                  </Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                  Comments
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f0f0f0",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#666" }}>Add Comment</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#87E64C",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
                      →
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DashboardMenu;
