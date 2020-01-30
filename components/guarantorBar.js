import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Draggable from "react-native-draggable";
import Color from "../constants/colors";

export default function LoanBar() {
  return (
    <View style={styles.Container}>
      <View style={styles.OuterBar}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.whiteTop}></View>
        <View style={styles.whiteBottom}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30
  },

  OuterBar: {
    width: 80,
    height: 20,
    borderColor: Color.green,
    borderWidth: 2,
    alignItems: "center"
  },
  whiteTop: {
    height: 20,
    width: 8,
    position: "relative",
    top: -23,
    left: 38,
    transform: [{ rotate: "-35deg" }],
    backgroundColor: Color.white
  },
  whiteBottom: {
    alignItems: "flex-end",
    height: 20,
    width: 8,
    position: "relative",
    // top: 13,
    left: 38,
    bottom: 30,
    transform: [{ rotate: "-135deg" }],
    backgroundColor: Color.white,
    zIndex: 1
  },
  text: {
    color: Color.white,
    fontSize: 12
  }
});
