import React, { Component } from 'react';
import Form from './components/Form';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;