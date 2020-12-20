import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';
import axios from 'axios'

class App extends Component {

  componentDidMount() {
    this.loadItem();  // loadItem 호출
  }

  state = {
    todos: []
  }


  loadItem = async() => {
    axios
    .get(
      'api/user-input-grocery/?gubun=1&email=multi@naver.com'
    ).then(({data}) => {
      this.setState({
        todos: data
      });
    })
  };
  

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