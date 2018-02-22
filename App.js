import React from 'react';
import { Provider } from 'react-redux';
import {Platform, StyleSheet, View} from "react-native";
import Expo, {Constants} from "expo";
import configureStore from './app/store/configureStore';
import LoginForm from './app/components/LoginScreen';
import AppWithNavigationState from './app/navigators/AppNavigator';

const store = configureStore({});

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({isReady: true});
  }




  render(){
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (

      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
