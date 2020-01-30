import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerActions } from "react-navigation-drawer";

import Logo from "../components/logo";
import FirstScreen from "../screens/fristScreen";
import SecondScreen from "../screens/secondScreen";
import ThirdScreen from "../screens/thirdScreen";
import Login from "../screens/login";
import SignUp from "../screens/SignUp";
import Confirm from "../screens/confirmBVN";
import Dashboard from "../screens/dashboard";
import Header from "../components/mobileNav";

const screens = {
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      drawerLockMode: "locked-closed",
      headerTitle: () => <Logo />
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  SecondScreen: {
    screen: SecondScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      drawerLockMode: "locked-closed",
      headerTitle: () => <Logo />
      // title: "Review Details"
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  ThirdScreen: {
    screen: ThirdScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      drawerLockMode: "locked-closed",
      headerTitle: () => <Logo />
      // title: "Review Details"
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      };
    }
  },

  Confirm: {
    screen: Confirm,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      drawerLockMode: "locked-closed",
      headerTitle: () => <Logo />
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      drawerLockMode: "locked-closed",
      headerTitle: () => <Logo />
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: { backgroundColor: "#eee", height: -100 },
      headerTitle: () => <Logo />
      //headerStyle: { backgroundColor: '#eee' }
    }
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444"
  }
});

export default HomeStack;
