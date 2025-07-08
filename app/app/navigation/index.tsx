import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAuth from "../screens/screenAuth/screenAuth";

const Root = createNativeStackNavigator();

const RootStack = (): React.JSX.Element => {
  return (
    <Root.Navigator>
      <Root.Screen name="home" component={ScreenAuth} />
    </Root.Navigator>
  );  
};

export default RootStack;
