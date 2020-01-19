import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/colors";

export default function BigText({ text }) {
  return (
    <View>
      <Text style={styles.BigText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BigText: {
    color: Color.deepGreen,
    fontSize: 43,
    fontWeight: "bold"
    // marginTop: 100
  }
});
