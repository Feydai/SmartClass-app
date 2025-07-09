import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//route
import ScreenAuth from "../screens/ScreenAuth/ScreenAuth";
import ScreenHome from "../screens/ScreenHome/ScreenHome";
import ScreenRoom from "../screens/ScreenRoom/ScreenRoom";
import ScreenPlanning from "../screens/ScreenPlanning/ScreenPlanning";
import ScreenEquipement from "../screens/ScreenEquipement/ScreenEquipement";

const Root = createNativeStackNavigator();

const RootStack = (): React.JSX.Element => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Group>
        <Root.Screen name="home" component={ScreenHome} />
        <Root.Screen name="login" component={ScreenAuth} />
      </Root.Group>
      <Root.Group>
        <Root.Screen name="room" component={ScreenRoom} />
        <Root.Screen name="planning" component={ScreenPlanning} />
      </Root.Group>
      <Root.Group>
        <Root.Screen name="equipement" component={ScreenEquipement} />
      </Root.Group>
    </Root.Navigator>
  );
};

export default RootStack;
