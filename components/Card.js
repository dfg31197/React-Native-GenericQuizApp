import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

const CardStyles = StyleSheet.create({
  container:{
    backgroundColor: '#FFD740',
    borderColor: '#FF5722',
    borderRadius: 20,
    opacity: 1,
    padding: 20,
    margin: 20
  },

  textMuted:{
    color: '#F1F8E9'
  },
  textMain:{
    color: '#fff'
  }
});


class Card extends React.Component {
  render() {
    return (
      <View style={CardStyles.container}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CardDetails',{data: this.props.data})} }>
          <View>
            <Text style={CardStyles.textMain}>{this.props.data.name}</Text>
            <Text style={CardStyles.textMuted}>{this.props.data.questions.length} Questions</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
const mapStateToProps = (state,own) => {
  return {data:state.entries.byId[own.data.id]}
//  return {data: state.entries.byId[this.props.own.id]}
}
export default connect(mapStateToProps)(Card);
