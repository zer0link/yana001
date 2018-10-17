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
 View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import {axios} from 'axios';
const axios = require('axios');

export default class Questions extends Component {

    constructor(props) {
        super(props);

        const { params } = this.props.navigation.state;
        console.log(params);

        this.state = {
            email: "hankhee@hotmail.com", //params.email,
            questionId: "",
            question: "",
            selectionA: "",
            selectionB: ""
            
        }
        this.submitAnswer = this.submitAnswer.bind(this);
        this.getNextQuestion = this.getNextQuestion.bind(this);
    }

    getNextQuestion(){
        console.log('https://alone-nodejs.herokuapp.com/useranswer/' + this.state.email);
        axios.get('https://alone-nodejs.herokuapp.com/useranswer/' + this.state.email
        )
            .then((response) => {
                this.setState({
                    questionId: response.data._id,
                    question: response.data.question,
                    selectionA: response.data.selectionA,
                    selectionB: response.data.selectionB
                });
                console.log(response);
            });        
    }

    submitAnswer(answer) {
        console.log(answer);
        axios.post('https://alone-nodejs.herokuapp.com/useranswer', {
            "userEmail": this.state.email,
            "questionId": this.state.questionId,
            "answer": answer
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillMount() {
        this.getNextQuestion();
    }

    render() {
        return (
            <Grid >
                <Row style={{ backgroundColor: '#635DB7', alignItems: 'center' }}>
                    <Col style={{ alignItems: 'center' }}>
                        <Text>
                            {this.state.question}
                        </Text>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#00CE9F', alignItems: 'center' }}>
                    <Col style={{ backgroundColor: '#ddd' }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.submitAnswer(this.state.selectionA)}
                        >
                            <Text style={{ alignSelf: 'center' }}> {this.state.selectionA}</Text>
                        </TouchableOpacity>

                    </Col>
                    <Col style={{ backgroundColor: '#bbb' }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.submitAnswer(this.state.selectionB)}
                        >
                            <Text style={{ alignSelf: 'center' }}> {this.state.selectionB}</Text>
                        </TouchableOpacity>
                    </Col></Row>
                <Row style={{ backgroundColor: '#635DB7' }}>
                    <Col>
                            <Button full light style={{bottom:-100}}
                                onPress={() => this.getNextQuestion()}
                            >
                                <Text>Next Question</Text>  
                            </Button>
                    </Col>
                </Row>
            </Grid>
            // <Container style={styles.container}>
            //   <Content>

            //     <Text>
            //       {this.state.question}
            //     </Text>

            //     <Grid>
            //       <Row style={{ backgroundColor: '#635DB7'}}>
            //       <Text>asdasd</Text>
            //       </Row>
            //       <Row size={3}>
            //   <Col style={{ backgroundColor: '#635DB7'}}>
            //     <TouchableOpacity
            //       onPress={() => this.submitAnswer(this.state.selectionA)}
            //     >
            //       <Text> {this.state.selectionA}</Text>
            //     </TouchableOpacity>

            //   </Col>
            //   <Col style={{ backgroundColor: '#00CE9F'}}>
            //     <TouchableOpacity
            //       onPress={() => this.submitAnswer(this.state.selectionA)}
            //     >
            //       <Text> {this.state.selectionB}</Text>
            //     </TouchableOpacity>
            //   </Col>

            //       </Row>
            //       <Row size={3}></Row>
            //     </Grid>

            //   </Content>
            // </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})