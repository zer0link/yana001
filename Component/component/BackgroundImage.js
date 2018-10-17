import React, { Component } from 'react';
import { Dimensions, StyleSheet, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

class BackgroundImage extends Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/img/background.jpeg')}>
                {this.props.children}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
		flex: 1,
        width: width,
        height: height - 55,
        alignItems: 'center'
  	}
});

module.exports = BackgroundImage;