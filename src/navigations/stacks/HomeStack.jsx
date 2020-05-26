import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Lista de Tareas ✅"
        component={HomeScreen}
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
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
