import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { AntDesign, Feather } from "@expo/vector-icons";
import Settings from "../pages/Settings";
import Search from "../pages/Search";
import Bookmarks from "../pages/Bookmarks";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          paddingTop: 13,
          paddingBottom: 13,
          backgroundColor: "#000",
          height: 70,
          margin: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          borderRadius: 100,
        },
        tabBarLabelStyle: {
          padding: 0,
          // display: "none",
        },
        // tabBarLabel: "",
        tabBarActiveBackgroundColor: "#E11A38",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#7D7C7B",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Bookmarks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigator;
