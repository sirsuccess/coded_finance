import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Route from "./navigations/indexRoute";
import Colors from "./constants/colors";

export default function App() {
  return (
    <>
      <StatusBar color={Colors.lightGreen} barStyle="light-content" />
      <Route />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
