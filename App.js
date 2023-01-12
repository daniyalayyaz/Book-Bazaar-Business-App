import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Login from "./Login";
import Signup from "./Signup";
import AllStores from "./AllStores";
import DetailPage from "./BookDetail";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import pendingorders from "./pendingorders";
import CompleteOrders from "./CompleteOrders";
import Pendingorders from "./pendingorders";
import EditStore from "./EditStore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Register"
          component={Signup}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Stores"
          component={StackScreen}
        />

        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="DetailPage"
          component={DetailPage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="AddBook"
          component={AddBook}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="EditBook"
          component={EditBook}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Pending"
          component={Pendingorders}
        />

        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Complete"
          component={CompleteOrders}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

export function StackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#E1B107",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Completed") {
            iconName = focused ? "checkmark-done" : "checkmark-done-outline";
          } else if (route.name === "Pending") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ header: () => null }}
        component={AllStores}
      />
      <Tab.Screen
        name="Pending"
        options={{ header: () => null }}
        component={pendingorders}
      />
      <Tab.Screen
        name="Completed"
        options={{ header: () => null }}
        component={CompleteOrders}
      />
      <Tab.Screen
        name="Profile"
        options={{ header: () => null }}
        component={EditStore}
      />
    </Tab.Navigator>
  );
}
