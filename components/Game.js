import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const GameStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  question: {
    marginTop: 30,
    backgroundColor: '#ddd',
    padding: 20
  },

  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  quesText: {
    fontSize: 15
  },

  button:{
    marginTop: 60,
    padding: 20,
    backgroundColor: 'crimson',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  trueButton: {
    marginRight: 20,
    alignSelf: 'flex-start'
  },

  disabledButton: {
    opacity: 0.3
  },

  falseButton: {
    marginLeft: 20,
  }

})

class Game extends React.Component {
  state= {
    totalQuestions: -999,
    solved: 0,
    right: 0,
    wrong: 0,
    flipped: false,
    finished: false
  }
  componentDidMount() {
    this.setState({totalQuestions: this.props.data.questions.length -1})
  }

  playAgain = () => {
    this.setState({
      totalQuestions: this.props.data.questions.length -1,
      solved: 0,
      right: 0,
      wrong: 0,
      flipped: false,
      finished: false
    })
  }

  questionsUI = () => (
    <View>
      <View style={GameStyleSheet.question}>
        <Text>{this.state.flipped?`${this.props.data.questions[this.state.solved].result}`:this.props.data.questions[this.state.solved].statement}</Text>
      </View>
      <View style={{alignItems:'center',backgroundColor:'yellow'}}>
        <TouchableOpacity onPress={()=>{this.setState((old)=>({flipped: !old.flipped}))}}>
          <Text>Flip the card!</Text>
        </TouchableOpacity>
      </View>
      <View style={GameStyleSheet.buttonView}>
        <TouchableOpacity style={[GameStyleSheet.button, GameStyleSheet.trueButton]} onPress={()=>{this.handleAnswer(true)}}>
          <Text style={GameStyleSheet.buttonText}>True</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[GameStyleSheet.button, GameStyleSheet.falseButton]} onPress={()=>{this.handleAnswer(false)}}>
          <Text style={GameStyleSheet.buttonText}>False</Text>
        </TouchableOpacity>
      </View>


    </View>
  )

  resultsUI = () => (
    <View>
      <View style={GameStyleSheet.question}>
        <Text>Game Complete! Your score: {this.state.right}/{this.state.totalQuestions + 1}</Text>
      </View>

      <View style={GameStyleSheet.buttonView}>
        <TouchableOpacity style={[GameStyleSheet.button, GameStyleSheet.trueButton]} onPress={()=>{this.playAgain()}}>
          <Text style={GameStyleSheet.buttonText}>Play Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[GameStyleSheet.button, GameStyleSheet.falseButton]} onPress={()=>{this.props.navigation.navigate('Landing')}}>
          <Text style={GameStyleSheet.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  handleAnswer = (answer) => {
    let decide = '';
    if(answer === this.props.data.questions[this.state.solved].result){
      decide = 'right'
    }else {
      decide = 'wrong'
    }
    this.setState((old)=>({
      ...old,
      solved: old.solved + 1,
      [decide]: old[decide] + 1,
      finished: old.solved === old.totalQuestions,
      flipped: false
    }))
  }
  render() {
    return (
      <ScrollView contentContainerStyle={GameStyleSheet.container}>
        {!this.state.finished?this.questionsUI():this.resultsUI()}
      </ScrollView>
          )
  }
}
const mapStateToProps = (state,own) => {
return {data: state.entries.byId[own.navigation.state.params.id]};
}
export default connect(mapStateToProps)(Game);
