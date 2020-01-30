import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import ProfileLoadingBar from "../components/profileLodingBar";
import InputText from "../components/inputText";
import Btn from "../components/button";
import LoanBar from "../components/loanBar";
import Color from "../constants/colors";

import Colors from "../constants/colors";

export default function Profile({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ProfileLoadingBar width="80" />
        <View style={styles.bar}>
          <LoanBar />
          <LoanBar />
          <LoanBar />
          <LoanBar />
        </View>
        <View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              resizeMode={"cover"}
              source={require("../assets/img/user.png")}
            />
          </View>

          <TouchableOpacity style={styles.cameraContainer}>
            <Image
              style={styles.img2}
              source={require("../assets/icons/camera.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Full Name</Text>
          <InputText placeholder="Full Name" />
          <Text style={styles.text}>Phone Number</Text>
          <InputText placeholder="Phone Number" />
          <Text style={styles.text}>Email</Text>
          <InputText placeholder="Email" />
          <Text style={styles.text}>Address</Text>
          <InputText placeholder="Address" />
          <Text style={styles.text}>City</Text>
          <InputText placeholder="City" />
          <Text style={styles.text}>State</Text>
          <InputText placeholder="State" />
        </View>
        <View style={styles.btn}>
          <Btn
            title="UPDATE PROFILE"
            widt={300}
            navigation={navigation}
            distination={"SecondScreen"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20
  },
  bar: {
    flexDirection: "row",
    width: 340,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  imgContainer: {
    width: 80,
    height: 80,
    marginTop: 10
  },
  img: {
    width: "100%",
    height: "100%"
  },
  img2: {
    // width: "50%",
    // height: "50%"
  },
  cameraContainer: {
    backgroundColor: Colors.green,
    borderRadius: 80,
    height: 30,
    width: 30,
    position: "relative",
    top: -30,
    right: -65,
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    width: 10,
    height: 10
  },
  btn: {
    marginTop: 10
  },
  text: {
    marginBottom: -30,
    marginTop: 10,
    color: Colors.gray
  }
});
