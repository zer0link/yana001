/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import BackgroundImage from '../component/BackgroundImage';
import CategoryBlock from '../component/CategoryBlock';
import Colors from '../Colors';

export default class Home extends Component {
    constructor(props) {
      	super(props);
      	this.state = { loading: true };
  	} 
  	render() {
		var left = (
			<Left style={{flex:1}}>
				<Button onPress={() => this._sideMenuDrawer.open()} transparent>
					<Icon name='ios-menu-outline' />
				</Button>
			</Left>
		);
		var right = (
			<Right style={{flex:1}}>
				<Button onPress={() => Actions.search()} transparent>
				<Icon name='ios-search-outline' />
				</Button>
			</Right>
		);
		return(
			<SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
				<Container>
					<Navbar left={left} right={right} title="Welcome" />
					<Content>
						<BackgroundImage>
							{/* {this.renderCategories()} */}
							<Image
								style={styles.image}
								source={require('../../assets/img/alone.png')}
							/>
							<View>
								<Text style={styles.title}>You Are Not Alone</Text>
								<Button style={styles.button} onPress={Actions["login"]}>
									<Text style={{color: '#fdfdfd'}}>Login</Text>
								</Button>
								<Button style={styles.button} onPress={Actions["signup"]}>
									<Text style={{color: '#fdfdfd'}}>Sign Up</Text>
								</Button>
							</View>
						</BackgroundImage>
					</Content>
				</Container>
			</SideMenuDrawer>
		);
  	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.buttonFirstColor, 
		marginTop: 20,
		marginHorizontal: 50,
		paddingVertical: 30,
		paddingHorizontal: 50
	},
	image: {
        width: 400,
        height: 300,
        resizeMode: 'center'
    },
	title:{
		color: '#000',
		fontWeight: 'bold',
		fontSize: 30
	}
});
