import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList2165405Navigator from '../features/ArticleList2165405/navigator';
import CopyOfSignUp12164978Navigator from '../features/CopyOfSignUp12164978/navigator';
import BlankScreen0164956Navigator from '../features/BlankScreen0164956/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList2165405: { screen: ArticleList2165405Navigator },
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
