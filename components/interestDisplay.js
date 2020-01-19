import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Color from "../constants/colors";

export default function InterestDisplay() {
  // console.log(navigation);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>28 Days - 15% Interest</Text>
        <TouchableOpacity onPress={() => setShowDropDown(!showDropDown)}>
          {showDropDown ? (
            <SimpleLineIcons name="arrow-down" size={22} color={Color.green} />
          ) : (
            <SimpleLineIcons name="arrow-right" size={22} color={Color.green} />
          )}
        </TouchableOpacity>
      </View>
      {showDropDown ? (
        <View style={styles.DropDownContainer}>
          <Text style={styles.DropDown}>28 Days - 15% Interest</Text>
          <Text style={styles.DropDown}>14 Days - 7.5% Interest</Text>
          <Text style={styles.DropDown}>7 Days - 3.5% Interest</Text>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    borderRadius: 20,
    height: 50,
    backgroundColor: Color.white,
    shadowColor: Color.lightDark,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginLeft: "auto",
    marginRight: "auto"
  },
  text: {
    // padding: 25,
    // overflow: "hidden",
    color: Color.green,
    fontSize: 18
  },
  DropDownContainer: {
    zIndex: 25,
    width: "77%",
    borderColor: Color.lightGray,
    borderWidth: 2,
    backgroundColor: Color.white,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 20,
    position: "relative",
    top: -10
  },
  DropDown: {
    width: "100%",
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Color.lightGray,
    borderBottomWidth: 2,
    color: Color.green,
    fontSize: 18
  }
});
