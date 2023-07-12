import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        marginTop: 200,
      }}
    >
      <Text style={{ fontSize: 40, textAlign: "center", color: "blue" }}>
        {count}
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          if (count > 0) setCount(count - 20);
        }}
      >
        <Text style={styles.textStyle}>-20</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => setCount(0)}>
        <Text style={styles.textStyle}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setCount(count + 20)}
      >
        <Text style={styles.textStyle}>+20</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "black",
    marginTop: 20,
    padding: 20,
    width: "50%",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
