import {Platform, Container,BackHandler} from 'react-native';
import React, { Component } from 'react';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Home from './Component/page/Home';
import Login from './Component/page/Login';
import Signup from './Component/page/Signup';
import QuestionsPage from './Component/page/QuestionsPage';

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
                        <Scene key="question" component={QuestionsPage} hideNavBar />
                    </Scene>
                </Router>
            </Root>
        );
    }
}




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!!!!Test
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
