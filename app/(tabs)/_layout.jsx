import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.bottomBar}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 25, height: 25 }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            height: 85,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#909090",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="expert"
          options={{
            title: "Expert Help",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.expert}
                color={color}
                name="Expert Help"
                focused={focused}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="goals"
          options={{
            title: "Goals",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.goals}
                color={color}
                name="Account"
                focused={focused}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.account}
                color={color}
                name="Account"
                focused={focused}
              />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabsLayout;
