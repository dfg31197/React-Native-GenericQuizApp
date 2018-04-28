import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Card from './Card';

const CardListStyles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20
  },

});

class CardList extends React.Component {
  render() {
    return (
      <ScrollView style={CardListStyles.container}>
        {
          this.props.allCards.map(card => <Card key={card.id} navigation={this.props.navigation} data={card} />)
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state,own) => {
  return {
    allCards: state.entries.allIds.map(card => state.entries.byId[card])
  }
}
export default connect(mapStateToProps)(CardList);
