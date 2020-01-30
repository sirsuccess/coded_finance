import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DrawNavigation from "./drawRoute";
import StackNavigation from "./route";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(StackNavigation);
const AuthStack = createStackNavigator(DrawNavigation);

export default createAppContainer(
  createSwitchNavigator(
    {
      //   AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    }
    // {
    //   InitialRouteName: "AuthLoading"
    // }
  )
);
