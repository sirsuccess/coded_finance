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

export default function ConfirmBVN({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.ContainerFluid}>
        <View style={styles.container}>
          <BigText text="Sign Up" />
          <Text style={styles.text}>
            Enter the 5 digit code sent to your BVN registered mobile number.
          </Text>
          <View style={styles.InputTextContainer}>
            <TextInput
              style={styles.InputText}
              keyboardType="numeric"
              maxLength={1}
              type="number"
            />
            <TextInput
              style={styles.InputText}
              keyboardType="numeric"
              maxLength={1}
              type="number"
            />
            <TextInput
              style={styles.InputText}
              keyboardType="numeric"
              maxLength={1}
              type="number"
            />
            <TextInput
              style={styles.InputText}
              keyboardType="numeric"
              maxLength={1}
              type="number"
            />
            <TextInput
              style={styles.InputText}
              keyboardType="numeric"
              maxLength={1}
              type="number"
            />
          </View>
          <View style={styles.LoginContainer}>
            <Btn
              title="Proceed"
              widt={300}
              navigation={navigation}
              distination={"FirstScreen"}
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
    width: "80%",
    backgroundColor: Color.white,
    marginLeft: "auto",
    marginRight: "auto"
    // alignItems: "center"
    // justifyContent: "center"
  },
  InputTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300
  },
  InputText: {
    width: 45,
    height: 80,
    borderColor: Color.green5,
    borderWidth: 1,
    marginTop: 50,
    textAlign: "center"
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
  }
});
