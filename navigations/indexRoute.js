import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import DashBoard from "../screens/dashboard";
import SignUp from "../screens/dashboard";
import Profile from "./profileDraw";
import Home from "./dashboardDraw";
import DrawerHead from "../components/drawerHead";
import Header from "../components/mobileNav";

// stacks
import HomeStack from "./route";
// import AboutStack from "./aboutStack";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    HOME: {
      screen: HomeStack
    },
    "MY PROFILE": {
      screen: Profile
    },
    "LOAN SUMMARY": {
      screen: HomeStack
    },

    SETTINGS: {
      screen: Home
    },
    "CODED CENTER": {
      screen: Profile
    },
    "CODED CENTER": {
      screen: Profile
    }
  },
  {
    contentComponent: DrawerHead
  }
);

export default createAppContainer(RootDrawerNavigator);
