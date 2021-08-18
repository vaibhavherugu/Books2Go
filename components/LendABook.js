import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LendABook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: false,
      results: [],
    };
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, marginTop: 20, textAlign: 'center'}}>
            Lend A Book
          </Text>
          <TextInput
            value={this.state.email}
            placeholder="Enter Book ISBN"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 30,
              fontSize: 20,
              width: '75%',
              height: 50,
            }}
            onChangeText={e => {
              this.setState({search: e});
            }}></TextInput>
          <TextInput
            value={this.state.email}
            placeholder="Enter Address"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 30,
              fontSize: 20,
              width: '75%',
              height: 50,
              marginBottom: 25,
            }}
            onChangeText={e => {
              this.setState({search: e});
            }}></TextInput>

          <Button
            //icon="login"
            mode="outlined"
            loading={this.state.loading}
            color="black"
            onPress={async () => {
              /* await axios
                .get(
                  `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.search}&key=AIzaSyAgm6PaQLLzeHaqyn16rgLXCDpprgOOZx0`,
                )
                .then(async res => {
                  this.setState({
                    results: res.data.items,
                  });
                  console.log(this.state.results[0]);
                  await axios
                    .post('https://diversitylibrary.herokuapp.com/books', {
                      title: this.state.results[0].volumeInfo.title,
                      author:
                        this.state.results[0].volumeInfo.authors.toString(),
                      cover:
                        this.state.results[0].volumeInfo.imageLinks.thumbnail,
                      checkedOut: false,
                    })
                    .then(res => {
                      alert('Success! Book has been added.');
                      console.log(res);
                    });
                })
                .catch(err => {
                  console.log(err);
                  alert(
                    'That is not a valid ISBN code. If it is, check if you are connected to the internet and try again.',
                  );
                }); */
            }}
            contentStyle={{
              width: 175,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Add The Book
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default LendABook;
