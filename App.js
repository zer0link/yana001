import {Platform, Container,BackHandler} from 'react-native';
import React, { Component } from 'react';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Home from './Component/page/Home';
import Login from './Component/page/Login';
import Signup from './Component/page/Signup';;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
	constructor(props) {
        super(props);
    } 
	componentWillMount = () => {
	    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
	};
    render() {
        return (
            <Root>
                <Router>
                    <Scene key="root">
                        <Scene initial key="home" component={Home} hideNavBar />
                        <Scene key="login" component={Login} hideNavBar />
                        <Scene key="signup" component={Signup} hideNavBar />
                    </Scene>
                </Router>
            </Root>
        );
    }
}
