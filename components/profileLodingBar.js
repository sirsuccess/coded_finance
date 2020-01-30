import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/colors";

export default function ProfileLoadingBar({ width }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          color: Colors.green3
        }}
        source={require("../assets/icons/back.png")}
      />
      <Text style={styles.text}>My Profile</Text>
      <View style={styles.outerLine}>
        <View
          style={{
            backgroundColor: Colors.green,
            borderRadius: 80,
            height: 16,
            width: `${width}%`
          }}
        >
          <Text style={styles.number}>{width}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
    marginRight: "auto",
    marginLeft: "auto"
  },
  text: {
    color: Colors.deepGreen,
    marginRight: 20,
    marginLeft: 30,
    fontSize: 20
  },
  outerLine: {
    borderColor: Colors.green,
    borderWidth: 1,
    height: 22,
    width: 200,
    padding: 2,
    // alignItems: "center",
    borderRadius: 80
  },
  innerLine: {
    backgroundColor: Colors.green,
    borderRadius: 80,
    height: 15,
    width: "30%"
  },

  number: {
    marginLeft: "auto",
    color: Colors.white,
    marginRight: 5,
    marginBottom: "auto",
    fontSize: 12
  }
});
