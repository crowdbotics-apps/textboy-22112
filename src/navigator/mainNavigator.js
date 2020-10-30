import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp23164980Navigator from '../features/SignUp23164980/navigator';
import CopyOfSignUp12164978Navigator from '../features/CopyOfSignUp12164978/navigator';
import BlankScreen0164956Navigator from '../features/BlankScreen0164956/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp23164980: { screen: SignUp23164980Navigator },
CopyOfSignUp12164978: { screen: CopyOfSignUp12164978Navigator },
BlankScreen0164956: { screen: BlankScreen0164956Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
