import React, { Component } from 'react';
import { Picker, View, Image, StyleSheet, Button, Text, Alert } from 'react-native';
import axios from 'axios';

const URL = "http://192.168.1.8:5000/api/";

export default class App extends Component {
  state = {
    response: ''
  }

  handleSelect = text => {
    this.setState({ response: text });
  };

  getData = () => {
    axios.get(URL+this.state.response)
    .then(response => {
      Alert.alert("Usted ha selecionado: " + JSON.stringify(response.data.empresa),
      ("Tiempo estimado de: " + JSON.stringify(response.data.tiempo) + " para su entrega"))
      // this.setState({ serverRes: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{width: 150, height: 50, fontSize: 20, fontWeight: 'bold'}}> Juguete Pedidos</Text>
        <Image
            style={{width: 200, height: 200}}
            source={require('./assets/silla.jpg')}
          />
        <Picker style={{ height: 150, width: 250 }} onValueChange={this.handleSelect}>
          <Picker.Item label="" value="" />
          <Picker.Item label="Fedex" value="fedex" />
          <Picker.Item label="Correo del Ecuador" value="correos-ecuador" />
          <Picker.Item label="Servientrega" value="servientrega" />
        </Picker>
        <Button
          title="Procesar"
          onPress = {() => {this.getData()}}
          // onPress={() => alert(JSON.stringify(this.state.response))}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
