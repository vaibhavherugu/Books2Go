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
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      coverImage2: [],
      coverImage3: [],
      lineDisplay: 'flex',
      lineDisplay2: 'none',
      coverImage: [],
    };
  }
  async componentDidMount() {
    var errorInternet = 0;
    axios
      .get('http://localhost:3000/books/pagination', {
        headers: {
          page: 0,
        },
      })
      .then(res => {
        this.setState({
          coverImage: res.data,
        });
        console.log(this.state.coverImage);
      })
      .catch(err => {
        errorInternet = 1;
        console.error(err);
      });
    axios
      .get('http://localhost:3000/books/pagination', {
        headers: {
          page: 1,
        },
      })
      .then(res => {
        this.setState({
          coverImage2: res.data,
        });
        console.log(this.state.coverImage2);
      })
      .catch(err => {
        errorInternet = 1;
        console.error(err);
      });
    axios
      .get('http://localhost:3000/books/pagination', {
        headers: {
          page: 2,
        },
      })
      .then(res => {
        this.setState({
          coverImage3: res.data,
        });
        console.log(this.state.coverImage3);
      })
      .catch(err => {
        errorInternet = 1;
        console.error(err);
      });

    if (errorInternet === 1) {
      alert('Something went wrong. Are you connected to the internet?');
    }
  }
  _renderItem = ({item, index}) => {
    console.log(item);
    var url = item.cover;
    url = url.replace(/^http:\/\//i, 'https://');
    return (
      // <View
      //   style={{
      //     backgroundColor: 'black',
      //     borderRadius: 5,
      //     height: 250,
      //     marginLeft: 25,
      //     marginRight: 25,
      //     marginBottom: -50,
      //   }}>
      <TouchableOpacity
        style={{
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 5,
          height: 'auto',
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
        onPress={async () => {
          const tokenCheck = await AsyncStorage.getItem('token');
          if (
            tokenCheck === undefined ||
            tokenCheck === null ||
            tokenCheck === ''
          ) {
            alert('You must be logged in to check out a book.');
            this.props.navigation.navigate('Login');
          } else {
            this.props.navigation.navigate('Book', {
              image: item.cover,
              title: item.title,
              author: item.author,
              id: item._id,
              checkedOut: item.checkedOut,
            });
          }
        }}>
        <Image
          source={{uri: url}}
          style={{
            borderRadius: 5,
            height: 'auto',
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}></Image>
      </TouchableOpacity>
      // </View>
    );
  };
  _renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Book', {
            image: item.cover,
            title: item.title,
            author: item.author,
            id: item._id,
            checkedOut: item.checkedOut,
          });
        }}>
        <Image
          source={{uri: item.cover}}
          style={{
            borderRadius: 5,
            height: 150,
            padding: 50,
            marginLeft: 0,
            marginRight: 0,
          }}></Image>
      </TouchableOpacity>
      // <View
      //   style={{
      //     backgroundColor: 'black',
      //     borderRadius: 5,
      //     height: 150,
      //     padding: 50,
      //     marginLeft: 0,
      //     marginRight: 0,
      //   }}>
      //   <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
      //   <Text style={{color: 'white'}}>{item.text}</Text>
      // </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Header
          title="Diversity Library"
          navigation={this.props.navigation}></Header> */}
        <Text></Text>
        <Text></Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{justifyContent: 'center'}}>
          <View style={{height: 260, zIndex: 0}}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.coverImage}
              sliderWidth={375}
              itemWidth={250}
              sliderHeight={100}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menutext}
              onPress={() => {
                LayoutAnimation.spring();
                this.setState({
                  lineDisplay: 'flex',
                  lineDisplay2: 'none',
                });
              }}>
              {/*<Text>Books</Text>
              <View
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: 'black',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  display: this.state.lineDisplay,
                }}></View>
              </TouchableOpacity>
              */}
              {/* <TouchableOpacity
              style={styles.menutext}
              onPress={() => {
                LayoutAnimation.spring();
                this.setState({
                  lineDisplay: 'none',
                  lineDisplay2: 'flex',
                });
              }}>
              <Text>My Library</Text>
              <View
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: 'black',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  display: this.state.lineDisplay2,
                }}></View>
            </TouchableOpacity> */}
            </TouchableOpacity>
          </View>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.coverImage2}
            sliderWidth={375}
            firstItem={1}
            itemWidth={100}
            renderItem={this._renderItem2}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.coverImage3}
            sliderWidth={375}
            firstItem={1}
            itemWidth={100}
            renderItem={this._renderItem2}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    zIndex: 1,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  menutext: {
    marginLeft: 75,
    marginRight: 75,
  },
});

export default HomeScreen;
