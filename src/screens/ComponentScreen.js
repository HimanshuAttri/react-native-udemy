import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>This is the Component Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
});

export default ComponentScreen;
