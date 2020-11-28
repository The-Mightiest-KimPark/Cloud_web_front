import React, {Component} from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends Component {

    //실제 업데이트 될때만 리렌더링 될 수 있도록 최적화
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos != nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
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