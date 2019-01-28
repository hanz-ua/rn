import React from 'react';
import SplashAppScreen from "./screens/SplashAppScreen";
import AppNavigator from './navigation/core/AppNavigation';
import {auth} from './utils/auth'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view:
                <SplashAppScreen/>
        };
        setTimeout(() => {
            this.setState({
                view: <AppNavigator/>
            })
        }, 2000)
    }

    // _bootstrapAsync = async () => {
    //     await auth.bootstrap();
    //     const userIsLoggedIn = auth.isLoggedIn();
    //
    //     this.props.navigation.navigate(userIsLoggedIn ? 'MenuScreen' : 'SignInScreen')
    // };

    render() {
        return (
            this.state.view
        );
    }
}