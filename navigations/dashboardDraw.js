import { createStackNavigator } from "react-navigation-stack";

import React from "react";
import Header from "../components/mobileNav";
import Dashboard from "../screens/dashboard";
import Profile from "../screens/profile";

const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      };
    }
  }
};

const dashboardStack = createStackNavigator(screens, {
  // defaultNavigationOptions: {
  //   headerTintColor: "#444",
  //   headerStyle: { backgroundColor: "#eee", height: 60 }
  // }
});

export default dashboardStack;
