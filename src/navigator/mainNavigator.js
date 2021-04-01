import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps220833Navigator from '../features/Maps220833/navigator';
import Additem220832Navigator from '../features/Additem220832/navigator';
import Maps220828Navigator from '../features/Maps220828/navigator';
import UserProfile220824Navigator from '../features/UserProfile220824/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps220833: { screen: Maps220833Navigator },
Additem220832: { screen: Additem220832Navigator },
Maps220828: { screen: Maps220828Navigator },
UserProfile220824: { screen: UserProfile220824Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
