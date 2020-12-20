import React, {Component} from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends Component {

    render() {
        const {todos} = this.props;

        const todoList = todos.map(
            ({id, name, count}) => (
                <TodoItem
                id={id}
                name={name}
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