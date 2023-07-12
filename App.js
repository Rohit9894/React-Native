import { StyleSheet, View } from "react-native";
import Counter from "./src/components/Counter";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    <Counter />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
