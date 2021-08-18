import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Image,
  ViewBase,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              marginTop: 20,
              marginBottom: 50,
              textAlign: 'center',
            }}>
            Home
          </Text>
          <Button
            //icon="login"
            mode="outlined"
            color="black"
            style={{marginBottom: 20}}
            contentStyle={{
              objectPosition: '50 50',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Lend a Book');
            }}>
            Lend a Book
          </Button>
          <Button
            //icon="login"
            mode="outlined"
            color="black"
            contentStyle={{
              objectPosition: '50 50',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Search');
            }}>
            Search for Books
          </Button>
          <View></View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
