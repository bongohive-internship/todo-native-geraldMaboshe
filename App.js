import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from './components/Todo';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

export default class App extends Component {
  state = {
    main: [

    ]
  }
  markDone = (id) => {
    this.setState({
      main: this.state.main.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        } return item;
      })
    })
  }
  del = (id) => {
    this.setState({ main: [...this.state.main.filter(item => item.id !== id)] });
  }
  addTodo = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,            //equivalent to title:title
      done: false
    }
    this.setState({ main: [...this.state.main, newItem] });
  }

  render() {
    return (
      <View>
        <View>
          <Header />
        </View>
        <View>
          <AddTodo addTodo={this.addTodo} />
        </View>

        <View >
          <Todo value={this.state.main} markDone={this.markDone} del={this.del} />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
