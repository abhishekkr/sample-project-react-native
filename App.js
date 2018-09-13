/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: '[mac] adb shell input keyevent 82',
  android:
  '[nix] adb shell input keyevent 82',
});

type Props = {};

class Home extends Component {
  render() {
    return (
        <View>
          <Text style={styles.welcome}>reaxn</Text>
          <Text style={styles.instructions}>Reaction to this and that.</Text>
          <Text style={styles.instructions}>{this.props.message}</Text>
        </View>
    );
  }
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render(){
    return (
      <View style={styles.date}>
        <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.src} style={{width: 193, height: 110, opacity: 0.1}}/>
        <Clock />
      </View>
    );
  }
}

export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: "https://openclipart.org/image/90px/svg_to_png/305057/1534139728.png"
    }
    return (
      <View style={styles.container}>
        <Home message="if you like to react, you do you" />
        <Logo src={pic} />
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  date: {
    textAlign: 'center',
    color: '#2f3f4f',
    marginBottom: 3,
  },
});
