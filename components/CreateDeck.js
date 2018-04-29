import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AppActions } from '../actions/Actions'
import { API } from '../utils/API'
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
    API.addDeck(id,name,this.props.entries.allIds)
    this.props.dispatch(AppActions.addDeck({id,name}));
    this.setState({name: '',disableSubmit:true});
    this.props.navigation.navigate('Landing')
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
            value = {this.state.name}
            onChangeText = {this.handleChange}/>

        </KeyboardAvoidingView>
        <TouchableOpacity disabled={this.state.disableSubmit} onPress = {()=>{this.submitDeck()}}>
          <Text> Create my Deck!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state,own) => {
  return state;
}

export default connect(mapStateToProps)(CreateDeck);
