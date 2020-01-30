import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Color from "../constants/colors";

export default function inputText({ placeholder }) {
  // console.log(navigation);

  return (
    <View style={styles.InputText}>
      <TextInput placeholder={placeholder} keyboardType="email-address" />
    </View>
  );
}

const styles = StyleSheet.create({
  InputText: {
    width: 300,
    borderBottomColor: Color.green5,
    borderBottomWidth: 1,
    marginTop: 30
  }
});
