import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Color from "../constants/colors";

export default function MobileNav({ navigation }) {
  const openMenu = () => {
    console.log(navigation);
    console.log("oooop i'm here");

    navigation.openDrawer();
  };
  return (
    <View style={styles.NavContainer}>
      <TouchableOpacity onPress={openMenu}>
        <Entypo name="menu" onPress={openMenu} size={32} color={Color.green} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.BellSection}>
        <View>
          <Feather name="bell" size={32} color={Color.green} />
          <Text style={styles.text}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  BellSection: {
    left: 250
  },
  text: {
    position: "relative",
    top: -40,
    right: -20,
    width: 20,
    height: 20,
    borderColor: Color.green,
    borderWidth: 3,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: Color.white,
    textAlign: "center"
  }
});
