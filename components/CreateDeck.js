import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AppActions } from '../actions/Actions'
class CreateDeck extends React.Component {
  state = {
    name: '',
    disableSubmit:true
  }
  handleChange = (text) => {
    this.setState({name:text},()=>{
      if(this.state.name !== ''){
        this.setState({disableSubmit:false})
      }else{
        this.setState({disableSubmit:true})
      }
    });
  }

  submitDeck = () => {
    const id = `DECK${new Date().getTime()}`;
    const { name } = this.state;
    this.props.dispatch(AppActions.addDeck({id,name}));
  }

  render() {
    return (
      <View>
        <Text>Create New Deck</Text>
        <KeyboardAvoidingView style={{width:300,marginTop:40}}>
          <TextInput
            style={{fontSize:20,padding:10}}
            underlineColorAndroid = "crimson"
            placeholder = "New Deck"
            placeholderTextColor = "#212121"
            autoCapitalize = "none"
            onChangeText = {this.handleChange}/>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress = {()=>{this.submitDeck()}}>
          <Text> Create my Deck!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state,own) => {
  return {}
}

export default connect(mapStateToProps)(CreateDeck);
