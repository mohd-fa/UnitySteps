import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="expert"
          options={{
            title: "Expert Help",
            headerShown: false,
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="goals"
          options={{
            title: "Goals",
            headerShown: false,
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
};

export default TabsLayout;
