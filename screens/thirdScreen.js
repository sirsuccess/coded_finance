import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Btn from "../components/button";
import Logo from "../components/logo";
import ProgressBar from "../components/progressBar";
import Color from "../constants/colors";

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>{/* <Logo /> */}</View>
      <Image
        style={{ width: 180, height: 170 }}
        source={require("../assets/img/screen1.png")}
      />
      <View>
        <Text style={styles.bigText}>Up to N 50 K Loan</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Get instant loan disbursement to your bank account, up to N 50, 000
          for first time applicants.
        </Text>
      </View>
      <View style={styles.bar}>
        <ProgressBar bgColor={Color.green} />
        <ProgressBar bgColor={Color.green} />
        <ProgressBar bgColor={Color.green} />
      </View>
      <Btn
        title="Get Loans"
        widt={300}
        navigation={navigation}
        distination={"Login"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: "center"
  },
  logo: {
    marginRight: "auto",
    marginTop: 50,
    marginBottom: 50
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250
  },
  bigText: {
    fontSize: 45,
    color: Color.deepGreen,
    width: 250
  },
  text: {
    color: Color.lightDark,
    width: 250,
    textAlign: "center",
    marginTop: 30
  }
});
