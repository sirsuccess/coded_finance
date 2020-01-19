import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import DashBoard from "../screens/dashboard";
import SignUp from "../screens/dashboard";
import Profile from "./drawRoute";
import Home from "./drawRoute";
import DrawerHead from "../components/drawerHead";

// stacks
import HomeStack from "./route";
// import AboutStack from "./aboutStack";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    "MY PROFILE": {
      screen: HomeStack,
      navigationOptions: {}
    },
    "LOAN SUMMARY": {
      screen: Profile,
      contentOptions: {
        activeTintColor: "red"
      }
    },

    SETTINGS: {
      screen: SignUp
    },
    "CODED CENTER": {
      screen: Profile
    },
    "LOG OUT": {
      screen: Profile
    }
  },
  {
    contentComponent: DrawerHead
  }
);

export default createAppContainer(RootDrawerNavigator);
