import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.home}
                color={color}
                name="Account"
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
