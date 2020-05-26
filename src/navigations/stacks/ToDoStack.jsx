import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import ToDoScreen from "../../screens/ToDoScreen";

const ToDoStack = createStackNavigator();

const ToDoStackScreen = ({ navigation }) => {
  return (
    <ToDoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ToDoStack.Screen
        name="Nueva tarea   ⨁"
        component={ToDoScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
    </ToDoStack.Navigator>
  );
};
export default ToDoStackScreen;
