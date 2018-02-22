import React from 'react';
import {Platform, StyleSheet, View} from "react-native";
import Expo, {Constants} from "expo";

export default function renderStatusBar() {
  if (Platform.OS === 'android')
    return <View style={styles.statusBar}/>;
}



// Setting Android StatusBar color
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#332fc2",
    height: Constants.statusBarHeight,
  }
});
