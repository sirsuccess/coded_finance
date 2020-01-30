import { createStackNavigator } from "react-navigation-stack";

import React from "react";
import Header from "../components/mobileNav";

import Profile from "../screens/profile";

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      };
    }
  }
};

const ProfileStack = createStackNavigator(screens, {
  // defaultNavigationOptions: {
  //   headerTintColor: "#444",
  //   headerStyle: { backgroundColor: "#eee", height: 60 }
  // }
});

export default ProfileStack;
