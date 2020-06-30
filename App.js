import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

class App extends Component {
  // first i started from here, we have our state stored in the root comp
  state = {
    todos: [
      // {id: 1, content:'First todo'},
      // {id: 2, content: 'second todo'}
    ]
  }
  // the function for add and delete they corespond with the state
  deleteTodo = (id) => {
    //use the filter method and pass the function
    const todos = this.state.todos.filter(todo => {
      //if the id's are equals we will delete the if they are not its it the opposite
      return todo.id !== id
    });
    this.setState({
      //shorter way because the key and the vall has the same name
      //otherwise todos : todos
      todos
    })
  }
  addTodo = (todo) => {
    // i generated random id with Math method , it is not the best but it is just for that exersice
    todo.id = Math.random();
    //new array whith is based to the old one because we can not
    //make the new one diractly and after that we pass the todo in the new array
    //new array is equal to the new array
    let todos = [...this.state.todos, todo]
       this.setState({
         todos: todos
       })
  }
  render() {
  return (
    // render our todos
    <div >
     <h1>Todos</h1>
     {/* i passed todos prop here  , here we make the accses */}
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
     {/* Here i call the function from addTodo, pass like a prop */}
      <AddTodo addTodo={this.addTodo}/>  
    </div>
  );
  }
}

export default App;
