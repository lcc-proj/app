import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import renderStatusBar from '../utils/statusbar';
import {LoginScreen} from "./LoginScreen";

export default class CanvasScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically rererereload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}
