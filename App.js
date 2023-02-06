import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "./src/constants/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AllExpenses from "./src/screens/AllExpenses";
import RecentExpenses from "./src/screens/RecentExpenses";
import ManageExpense from "./src/screens/ManageExpense";
import IconButton from "./src/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        // !กำหนดสี header ทุกหน้า(base)
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        // !! (สีตัวอักษร header)
        headerTintColor: GlobalStyles.colors.accent500,
        // !สีตรง tabs ด้านล่าง
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add-circle"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Express",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-hourglass-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Express",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calendar-sharp" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.accent500,
          }}
        >
          <Stack.Screen
            name="BottomTabsOverview"
            component={BottomTabsOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
    justifyContent: "center",
  },
});
