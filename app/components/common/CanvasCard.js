/**
 * Created by sedir on 05/09/17.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Body, Container, Content} from "native-base";
import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import nav from "../../reducers/navigator";
import {changePostit} from '../../actions/requests';

class CanvasCard extends React.Component {

  showChangeScreen(data) {
    this.props.changePostit(data);
  }


  renderItems() {
    if (this.props.data)
      return this.props.data.postits.map(
        data => {
          if (!data.oculto)
            return <TouchableOpacity key={data.id} onPress={this.props.changePostit}><Text>{data.conteudo}</Text></TouchableOpacity>
        }
      )
  }

  render(){
    return (
    <Card>
      <CardItem header style={[styles.container, {backgroundColor: this.props.data.codigo_cor_hex}]}>
        <Text style={[styles.textCommon, styles.textTitle]}>{this.props.data.nome}</Text>
      </CardItem>
      <CardItem style={[styles.container, styles.containerPostit]}>
        <Body>
        {this.renderItems()}
        </Body>
      </CardItem>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#178c08',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerPostit: {
    margin: 10,
    padding: 10,
    backgroundColor: 'yellow',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
  },
  textCommon: {
    color: '#fff'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  }

});


const mapDispatchToProps = dispatch => ({
  change: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Change' })),
  changePostit: changePostit
});

const mapStateToProps = state => ({
  isLoggedIn: nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasCard);
