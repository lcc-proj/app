import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import renderStatusBar from '../utils/statusbar';
import {LoginScreen} from "./LoginScreen";
import CanvasCard from "./common/CanvasCard";
import {Card, CardItem, Body, Container, Content} from "native-base";
import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import nav from "../reducers/navigator";
import axios from "axios/index";
import {Spinner} from 'native-base';

export default class MainScreen extends React.Component {

  constructor(){
    super();
    this.state = { data: null };
  }


  componentWillMount() {
    axios.get('http://172.20.10.3:8000/dashboard/api/postits')
      .then(response => this.setState({data: response.data}));
  }

  renderCards() {
    if (this.state.data)
      return this.state.data.map(
        data => {
          return <CanvasCard key={data.id} data={data}/>
        }
      )
    else {
      return <Spinner color='black'/>
    }
  }

  render() {
    return (
      <Container>
        <Content>
        <View style={styles.image}>
          <Image source={require('../../assets/logo_3.png')}></Image>
        </View>
          {this.renderCards()}
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


MainScreen.navigationOptions = {
  title: 'LCC Manager'
};


