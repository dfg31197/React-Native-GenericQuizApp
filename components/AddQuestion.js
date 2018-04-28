import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { AppActions } from '../actions/Actions';

const AddQuestionStyleSheet = StyleSheet.create({
  container:{
    alignItems: 'center',
  },

  title: {
    marginTop: 20,
    padding: 10,
    fontSize: 20
  },

  button:{
    padding: 30,
    backgroundColor: 'crimson',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  trueButton: {
    marginRight: 20,
  },

  disabledButton: {
    opacity: 0.3
  },

  falseButton: {
    marginLeft: 20,
  }
})

class AddQuestion extends React.Component {

  state = {
    question: '',
    disableButtons: true,
    adding: false
  }

  handleChange = (text) => {
    this.setState({question:text},()=>{
      if(this.state.question !== '') {
        this.setState({disableButtons: false})
      }else{
        this.setState({disableButtons: true})
      }
    });
  }

  submitQuestion = (answer) => {
      this.setState({disableButtons:true})
      const parentId = this.props.id;
      const questionId = `QUESTION${new Date().getTime()}`;
      const { question } = this.state;
      this.props.dispatch(AppActions.addQuestion({
        parentId,
        questionId,
        question,
        answer,
      }))
      setTimeout(this.props.navigation.goBack,1000)
  }
  render() {
    return (<ScrollView contentContainerStyle={AddQuestionStyleSheet.container}>
      <Text style={AddQuestionStyleSheet.title}>Add Question to "{this.props.allEntries[this.props.id].name}"</Text>
      <KeyboardAvoidingView style={{width:300}}>
        <TextInput
          style={{fontSize:20,padding:10}}
          underlineColorAndroid = "crimson"
          placeholder = "Enter yer question"
          placeholderTextColor = "#212121"
          autoCapitalize = "none"
          onChangeText = {this.handleChange}/>
      </KeyboardAvoidingView>
      <View style={{flexDirection: 'row', padding: 20}}>
        <TouchableOpacity onPress={()=>{this.submitQuestion(true)}} disabled={this.state.disableButtons} style={[this.state.disableButtons ? AddQuestionStyleSheet.disabledButton :AddQuestionStyleSheet.button, AddQuestionStyleSheet.trueButton]}>
          <Text style={ AddQuestionStyleSheet.buttonText}>True</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.submitQuestion(false)}} disabled={this.state.disableButtons} style={[this.state.disableButtons ? AddQuestionStyleSheet.disabledButton :AddQuestionStyleSheet.button, AddQuestionStyleSheet.falseButton]} >
          <Text style={ AddQuestionStyleSheet.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>)
  }
}
const mapStateToProps = (state,own) => {
  return {allEntries: state.entries.byId,own, id: own.navigation.state.params.id};
}
export default connect(mapStateToProps)(AddQuestion)
