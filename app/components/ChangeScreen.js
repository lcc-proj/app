import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import renderStatusBar from '../utils/statusbar';
import {LoginScreen} from "./LoginScreen";
import CanvasCard from "./common/CanvasCard";
import {Card, CardItem, Body, Container, Content} from "native-base";
import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import axios from 'axios';
import nav from "../reducers/navigator";

class ChangeScreen extends React.Component {

  constructor(){
    super();
    this.state = { data: null };
  }


  render() {
    return (
      <Container>
        <Content>
        <View>
          <Text>{this.props.postit}</Text>
        </View>
      </Content>
      </Container>
    );
  }
}

ChangeScreen.navigationOptions = {
  title: 'Gerenciamento de mudança'
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  mainScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Main' })),
});

const mapStateToProps = state => ({
  postit: state.lcc.selected_postit,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeScreen);
