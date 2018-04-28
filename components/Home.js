import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import CreateDeck from './CreateDeck';
import Landing  from './Landing';
import Constants from 'expo'
const Tabs = TabNavigator({
  Quiz: {
    screen: CreateDeck
  },
  Create: {
    screen: Landing
  },
});

class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}

export default Home;
