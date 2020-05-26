import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackScreen from "../stacks/HomeStack";
import ToDoStackScreen from "../stacks/ToDoStack";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="To-Do" component={ToDoStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigation;
