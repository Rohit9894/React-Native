import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/101738635?v=4",
        }}
        style={styles.image}
      />
      <Text>WelCome Rohit Gupta</Text>
      <Text>
        NavigationContainer is a component which manages our navigation tree and
        contains the navigation state. This component must wrap all navigators
        structure. Usually, we'd render this component at the root of our app,
        which is usually the component exported from App.js.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default Home;
