import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet,TextInput, PickerIOSComponent, SafeAreaView} from 'react-native'
import Constants from 'expo-constants'

let id = 0

const styles = StyleSheet.create({
  todoList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    paddingTop:20,
    flex:1
  },
  addb : {
    width:100,
    height:30,
    color:"pink",
  },
 
    head: {
      flex: 1,
     
      color:"black",
      alignItems: 'center',
      justifyContent: 'center',
    },   
  });


const Todo = props => (
  <View style={styles.todoList}>
   <Text style={{paddingLeft:20}}>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      text: '',
    }
  }

  addTodo(text) {
    id++
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: id, text: text,},
      ],
      text: '',
    })
  }

  takeInput = (input) => {
      this.setState({ text: input })
  }
render() {
    return (
      <SafeAreaView>
        <Text style={styles.head}>To-Do List!!</Text>
          <TextInput
            style={{ height: 40, borderWidth: 2, margin: 10, borderColor: 'gray', paddingLeft:10}}
            placeholder = "Enter Task"
            onChangeText={this.takeInput}
            value={this.state.text}
          />
        <Button 
        style={styles.addb}
        onPress = {() => 
        this.addTodo(this.state.text)}
         title="Add Task" />
        <ScrollView>
          {this.state.tasks.map(todo => (
            <Todo
              todo={todo}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
  
    
}
