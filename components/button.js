import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GlobalStyle from "../styles/globalStyles";
import Color from "../constants/colors";

export default function Btn({ title, widt }) {
  return (
    <View
      style={[
        {
          width: widt,
          borderRadius: 20,
          overflow: "hidden"
        }
      ]}
    >
      <Button title={title} color={Color.green5} />
    </View>
  );
}

const styles = StyleSheet.create({
  btton: {
    width: 300,
    backgroundColor: Color.green5,
    color: Color.white
  }
});
