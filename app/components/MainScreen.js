import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import renderStatusBar from '../utils/statusbar';
import {LoginScreen} from "./LoginScreen";
import CanvasCard from "./common/CanvasCard";
import {Card, CardItem, Body, Container, Content} from "native-base";

export default class MainScreen extends React.Component {

  constructor(){
    super();
    this.state = { data: require('../store/api.json') };
  }


  renderCards() {
    if (this.state.data)
      return this.state.data.map(
        data => {
          return <CanvasCard key={data.id} data={data}/>
        }
      )
  }

  render() {
    return (
      <Container>
        <Content>
        <View>
        </View>
          {this.renderCards()}
      </Content>
      </Container>
    );
  }
}

MainScreen.navigationOptions = {
  title: 'LCC Manager'
};
