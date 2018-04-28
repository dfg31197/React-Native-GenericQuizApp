import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CardList from './components/CardList';
import Card from './components/Card';
import Game from './components/Game';
import CreateDeck from './components/CreateDeck';
import CardDetails from './components/CardDetails';
import AddQuestion from './components/AddQuestion';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import store from './store/Store';


const HomeStack = StackNavigator({
  Landing: {
    screen: CardList,
    navigationOptions: {
      title: "Quiz"
    }
  },

  CardDetails: {
    screen: CardDetails,
    navigationOptions: {
      title: "Choose option"
    }
  },

  Card: {
    screen: Card,
  },

  Game: {
    screen: Game
  },

  Add: {
    screen: AddQuestion,
    navigationOptions: {
      title: "Add"
    }
  }

});

const CreateStack = StackNavigator({
  AddName: {
    screen: CreateDeck
  },

})

const TabNav = TabNavigator({
  Quiz: {
    screen: HomeStack
  },

  Create: {
    screen: CreateStack
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar hidden={true} />
          <TabNav />
        </View>
      </Provider>
        );
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
