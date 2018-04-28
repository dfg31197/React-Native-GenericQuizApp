import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
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
  state={
    bounceValue: new Animated.Value(1),
  }

  handlePress = () => {
    // Animation lessons :P
    const bounceValue = this.state.bounceValue;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 400, toValue:2}),
      Animated.spring(bounceValue, { toValue: 1, friction: 2})
    ]).start()
    this.props.navigation.navigate('CardDetails',{data: this.props.data})
  }
  render() {
    const bounceValue = this.state.bounceValue;
    return (
      <Animated.View style={[CardStyles.container,{transform: [{scale: bounceValue}]}]}>
        <TouchableOpacity onPress={()=>{this.handlePress()} }>
          <View>
            <Text style={CardStyles.textMain}>{this.props.data.name}</Text>
            <Text style={CardStyles.textMuted}>{this.props.data.questions.length} Questions</Text>
          </View>
        </TouchableOpacity>

      </Animated.View>
    )
  }
}

const mapStateToProps = (state,own) => {
  return {data:state.entries.byId[own.data.id]}
}
export default connect(mapStateToProps)(Card);
