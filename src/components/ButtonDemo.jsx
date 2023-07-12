import { Alert, Button, StyleSheet, View } from "react-native";
import React from "react";

const ButtonDemo = () => {
  return (
    <View style={styles.buttonStyle}>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
};

export default ButtonDemo;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 300,
  },
});
