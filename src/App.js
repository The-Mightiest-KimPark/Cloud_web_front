import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {

  state = {
    todos: [
      {id: 0, text: '당근', count: 3},
      {id: 1, text: '토마토', count: 3},
      {id: 2, text: '가지', count: 3},
    ]
  }

  render() {
    const{todos} = this.state;

    return (
      <TodoListTemplate form={(
        <Form/>
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;