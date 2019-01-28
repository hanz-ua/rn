import React from 'react';
import {createStackNavigator,} from 'react-navigation';
import SplashScreen from "../screens/SplashAppScreen"
import SignInScreen from "../screens/SignInScreen";
import MenuScreen from "../screens/MenuScreen";
import AddCarScreen from "../screens/AddCarScreen";
import PreviewCarScreen from "../screens/PreviewCarScreen";

const App = createStackNavigator({
    SignInScreen: {screen: SignInScreen},
    MenuScreen: {screen: MenuScreen},
    AddCarScreen: {screen: AddCarScreen},
    PreviewCarScreen: {screen: PreviewCarScreen}
});

export default App;
