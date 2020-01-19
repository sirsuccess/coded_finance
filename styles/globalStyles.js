import React from "react";
import { StyleSheet } from "react-native";
import Color from "../constants/colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  btton: {
    backgroundColor: Color.green5,
    color: Color.white
  }
});
