import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/colors";

export default function ProgressBar({ bgColor }) {
  return (
    <View style={styles.BarContainer}>
      <View style={styles.line2}></View>
      <View style={{ ...styles.bar, ...{ backgroundColor: bgColor } }}></View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  BarContainer: {
    marginTop: 50,
    height: 50,
    width: 90,
    overflow: "hidden"
  },
  bar: {
    height: 7,
    width: 80,
    backgroundColor: Color.lightGreen
  },
  line: {
    height: 20,
    width: 8,
    position: "relative",
    top: -18,
    left: -2,
    transform: [{ rotate: "-135deg" }],
    backgroundColor: "white"
  },
  line2: {
    alignItems: "flex-end",
    height: 20,
    width: 8,
    position: "relative",
    // top: 13,
    left: 75,
    bottom: -16,
    transform: [{ rotate: "-135deg" }],
    backgroundColor: "white",
    zIndex: 1
  }
});
