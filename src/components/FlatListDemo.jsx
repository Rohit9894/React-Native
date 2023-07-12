import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatListDemo = () => {
  const arr = [
    {
      index: "1",
      name: "vinod",
    },
    {
      index: "2",
      name: "Rohit",
    },

    { index: "3", name: "sumit" },
    {
      index: "4",
      name: "Deepak",
    },

    { index: "5", name: "chunmun" },
    {
      index: "6",
      name: "som",
    },

    { index: "7", name: "Indrajeet" },
    {
      index: "8",
      name: "sandeep",
    },

    { index: "9", name: "panna" },
    {
      index: "10",
      name: "Tanish",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(index) => {
        return index.index;
      }}
      // horizontal
      inverted
      numColumns={2}
      data={arr}
      renderItem={(element) => {
        return <Text style={styles.textStyle}>{element.item.name}</Text>;
      }}
    />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,

    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
    textAlign: "center",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
