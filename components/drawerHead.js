import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import colors from "../constants/colors";
import Logo from "../components/logo";

export default DrawerHead = props => (
  <ScrollView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: colors.green,
        color: colors.white
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 50,
          marginBottom: 10
        }}
      >
        Adebayo Adeyinka
      </Text>
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: 150,
          height: 150,
          borderRadius: 80,
          //   padding: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.white
        }}
      >
        <Image
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: 130,
            height: 130,
            borderRadius: 80
          }}
          source={require("../assets/img/user.png")}
        />
      </View>
    </View>
    <ScrollView style={{ marginTop: 100 }}>
      <DrawerItems {...props} />
    </ScrollView>
    <View style={{ width: 100, marginTop: 50, marginLeft: 20 }}>
      <Logo />
    </View>
    <View>
      <Text style={{ color: colors.deepGreen, marginLeft: 20, marginTop: 10 }}>
        (c) 2020 All Rights Reserved
      </Text>
    </View>
  </ScrollView>
);
