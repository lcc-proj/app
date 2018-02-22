import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import { addListener } from '../utils/redux';
import CanvasScreen from "../components/CanvasScreen";
import ChangeScreen from "../components/ChangeScreen";


const MainTabNavigator = TabNavigator(
  {
    Col1: { screen: CanvasScreen },
    Col2: { screen: CanvasScreen },
    Col3: { screen: CanvasScreen },
    Col4: { screen: CanvasScreen },
    Col5: { screen: CanvasScreen },
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-options${focused ? '' : '-outline'}`;
    //     }
    //
    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);


export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Change: { screen: ChangeScreen },
});



class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
