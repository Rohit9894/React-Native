import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TouchableOpacityDemo = () => {
  return (
    <View style={{ marginTop: 200 }}>
      <TouchableOpacity onPress={() => Alert.alert("Hello World")}>
        <Text>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityDemo;

const styles = StyleSheet.create({});
