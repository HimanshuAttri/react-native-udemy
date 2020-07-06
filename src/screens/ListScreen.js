import React from "react";
import { View, Text, StyleSheet, FlatLiist } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: "56" },
    { name: "Friend 2", age: "56" },
    { name: "Friend 3", age: "56" },
    { name: "Friend 4", age: "56" },
    { name: "Friend 5", age: "56" },
    { name: "Friend 6", age: "56" },
    { name: "Friend 7", age: "56" },
    { name: "Friend 8", age: "56" },
    { name: "Friend 9", age: "56" },
  ];

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}- Age:{item.age}{" "}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
  },
});

export default ListScreen;
