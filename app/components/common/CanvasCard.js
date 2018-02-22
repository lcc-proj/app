/**
 * Created by sedir on 05/09/17.
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Body, Container, Content} from "native-base";


export default class CanvasCard extends React.Component {


  renderItems() {
    if (this.props.data)
      return this.props.data.postits.map(
        data => {
          return <Text style={styles.textCommon} key={data.id}>{data.conteudo}</Text>
        }
      )
  }

  render(){
    return (
    <Card>
      <CardItem header style={[styles.container, {backgroundColor: this.props.data.codigo_cor_hex}]}>
        <Text style={[styles.textCommon, styles.textTitle]}>{this.props.data.nome}</Text>
      </CardItem>
      <CardItem style={[styles.container, {backgroundColor: this.props.data.codigo_cor_hex}]}>
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
  textCommon: {
    color: '#fff'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  }

});
