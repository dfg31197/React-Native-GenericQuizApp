import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

const CardDetailsStyles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  title: {
    padding: 15,
    backgroundColor: 'salmon',
    color: 'white',
  },

  questions: {
    padding: 20,
    color: 'white',
    backgroundColor: '#CFD8DC',
  },

  addButton: {
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'gold'
  },
  playButton: {
    backgroundColor: '#B39DDB',
    padding:30,
    borderColor: '#000',
    borderRadius: 100
  },

  playButtonText: {
        fontSize: 12,
  }
});

class CardDetails extends React.Component {
  render() {
    return (
      <View style={CardDetailsStyles.container}>
        <Text style={CardDetailsStyles.title}>{this.props.data.name}</Text>
        <Text style={CardDetailsStyles.questions}>{this.props.data.questions.length} Questions</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Add',{id:this.props.data.id})}} style={CardDetailsStyles.addButton}>
          <Text>Add Another Question!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CardDetailsStyles.playButton} onPress={()=>{this.props.navigation.navigate('Game',{id: this.props.data.id})}} >
          <Text style={CardDetailsStyles.playButtonText}>Play!</Text>
        </TouchableOpacity>
      </View>
        )
        }
        }

const mapStateToProps = (state,own) => {
return {data: state.entries.byId[own.navigation.state.params.data.id],navigation: own.navigation};
}



export default connect(mapStateToProps)(CardDetails);
