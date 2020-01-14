import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/colors";

export default function Logo() {
  return (
    <View>
      <View>
        <Text style={styles.code}>Coded</Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
        <View
          style={{ ...styles.circle, ...{ backgroundColor: Color.green } }}
        ></View>
        <Text style={styles.text}>Finance</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    // justifyContent: "flex-end"
    width: 400,
    backgroundColor: "red",
    borderColor: "black"
  },
  code: {
    color: Color.deepGreen,
    fontSize: 33,
    fontWeight: "bold",
    opacity: 0.89
    // fontFamily: "Segoe UI"
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
    marginTop: -5,
    marginLeft: "auto"
  },
  circle: {
    borderRadius: 100,
    height: 15,
    width: 15,
    backgroundColor: Color.green5
  },
  text: {
    color: Color.deepGreen,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1
  }
});
