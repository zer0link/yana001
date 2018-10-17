import React, { Component } from 'react';
import {
  Container, Header, Content, Button, Text, Grid, Col, Row
} from 'native-base';
import {
  Platform,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  // Text,
  // View
} from 'react-native';

// import {axios} from 'axios';
const axios = require('axios');

export default class Login extends Component {

    constructor() {
      super()
      this.state = { email: 'hankhee@hotmail.com' };
    }
  
    render() {
      return (
        <Container>
          <Content>
            <TextInput
              style={{ height: 40 }}
              placeholder="Email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <Button onPress={() => this.props.navigation.navigate('Question', { email: this.state.email })}>
              <Text>Login</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }