import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Route from "./routes/indexRoute";

export default function App() {
  return <Route />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
