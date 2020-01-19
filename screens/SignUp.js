import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Btn from "../components/button";
import Color from "../constants/colors";
import BigText from "../components/bigText";

export default function SignUp({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.ContainerFluid}>
        <View style={styles.container}>
          <BigText text="Sign Up" />
          <Text style={styles.text}>
            Enter your BVN, an SMS will be sent to your registered mobile
            number.
          </Text>
          <View style={styles.InputText}>
            <TextInput placeholder="BVN number" keyboardType="numeric" />
          </View>

          <View style={styles.LoginContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.SignUp}>Login</Text>
            </TouchableOpacity>
            <Btn
              title="Sign Up"
              widt={150}
              navigation={navigation}
              distination={"Confirm"}
            />
          </View>
          <View style={styles.Social}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/icons/search.png")}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/icons/facebook.png")}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  ContainerFluid: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.white
  },
  container: {
    paddingTop: 100,
    width: "80%",
    backgroundColor: Color.white,
    marginLeft: "auto",
    marginRight: "auto"
    // alignItems: "center"
    // justifyContent: "center"
  },

  InputText: {
    width: 300,
    borderBottomColor: Color.green5,
    borderBottomWidth: 1,
    marginTop: 50
  },
  text: {
    color: Color.lightDark,
    fontSize: 16,
    marginTop: 50
  },
  LoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 100
  },
  SignUp: {
    fontSize: 25,
    color: Color.green2
  },
  Social: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  }
});
