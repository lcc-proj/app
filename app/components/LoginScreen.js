import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Form, Item, Label, Spinner, Input, Content, Button, Text } from 'native-base';
import { Card, CardSection } from "./common";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import renderStatusBar from '../utils/statusbar';

export default class LoginScreen extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }


  onLoginPress(){
    console.log(this.state);
    const { email, password } = this.state;

    this.setState({error: '', loading: true});

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch(this.onLoginFail.bind(this));
    //   });
  }

  onLoginSuccess(){
    console.log('OK!')
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }

  onLoginFail(error){
    this.setState({
      error: error.message,
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner color='black' />
    }
    return (
      <Button onPress={this.onLoginPress.bind(this)} block primary>
        <Text>Fazer login</Text>
      </Button>
    );
  }

  renderError(){
    if (this.state.error !== '')
      return (<Text style={styles.errorText}>{this.state.error}</Text>);
    return <View />;
  }

  render(){
    return (
      <Container>

        {renderStatusBar()}
        <Content>

      <Card>
        <Form>
          <Item inlineLabel>
            <Label>E-mail</Label>
            <Input
              keyboard-type='email-address'
              autoCorrect={false}
              autoFocus autoCapitalize='none'
              value={this.state.email}
              onChangeText={text => this.setState({email: text})} />
          </Item>
          <Item inlineLabel last>
            <Label>Senha</Label>
            <Input
              secureTextEntry returnKeyType='done' autoCorrect={false}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}/>
          </Item>
          {this.renderError()}
          {this.renderButton()}
        </Form>
      </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  errorText:{
    padding: 5,
    color: '#ea0021'
  }
});