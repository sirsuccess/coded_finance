import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Color from "../constants/colors";
import Btn from "../components/button";
import BigText from "../components/bigText";
import PaymentBar from "../components/paymentBar";
import InterestDisplay from "../components/interestDisplay";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.CircleSection}>
        <View style={styles.GreenCircle}>
          <Text>Eligibility</Text>
          <BigText text="130%" />
        </View>
        <Btn title="Raise Score" widt={150} />
      </View>
      <View style={styles.MaxEligible}>
        <BigText text="N 50, 000" />
        <Text>Max Eligible Loan Amount</Text>
      </View>
      <PaymentBar />
      <InterestDisplay />
      <View style={styles.PaymentSection}>
        <View style={styles.InnerPaymentSection}>
          <Text style={styles.PaymentSectionValue}>N7, 500</Text>
          <Text>15% Interest</Text>
        </View>
        <View style={styles.InnerPaymentSection}>
          <Text style={styles.PaymentSectionValue}>N57, 500</Text>
          <Text>Repayment Amount</Text>
        </View>
      </View>

      <Btn title="get funds" widt={350} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white
  },
  CircleSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // height: 200,
    overflow: "hidden",
    marginTop: 20,
    width: 400
  },

  GreenCircle: {
    width: 130,
    height: 130,
    borderColor: Color.green,
    borderWidth: 2,
    borderRadius: 100,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "red"
  },
  MaxEligible: {
    // width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 30
  },
  PaymentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: Color.lightGreen,
    paddingRight: 30,
    paddingLeft: 30,
    marginBottom: 50,
    marginTop: 20
  },
  InnerPaymentSection: {
    top: -20
  },
  PaymentSectionValue: {
    fontSize: 28,
    color: Color.deepGreen,
    fontWeight: "bold"
  }
});
