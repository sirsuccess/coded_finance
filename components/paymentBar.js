import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Draggable from "react-native-draggable";
import Color from "../constants/colors";

export default function MobileNav() {
  return (
    <View style={styles.Container}>
      <View style={styles.Line}></View>
      {/* <Draggable x={0} y={0} debug renderSize={100} isCircle> */}
      <View style={styles.Circle}>
        <Ionicons name="ios-menu" size={32} color={Color.green} />
      </View>
      {/* </Draggable> */}
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
    marginRight: "auto"
  },
  Line: {
    height: 3,
    width: "80%",
    backgroundColor: Color.green,
    marginLeft: "auto",
    marginRight: "auto"
  },
  Circle: {
    borderRadius: 100,
    width: 45,
    height: 45,
    borderWidth: 1.5,
    backgroundColor: Color.white,
    borderColor: Color.dark50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: -84
  }
});
