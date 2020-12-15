import React, {Component} from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends Component {

    render() {
        const {todos} = this.props;

        const todoList = todos.map(
            ({id, text, count}) => (
                <TodoItem
                id={id}
                text={text}
                count={count}
                key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;