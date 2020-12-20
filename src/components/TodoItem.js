import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    render() {
        const { name, count, id } = this.props;
        console.log(id);

        return (
            <div className="todo-item">
                <div className={`todo-text`}>
                    <div>{name}</div>
                </div>
                <div className={`todo-text`}>
                    <div>{count}</div>
                </div>
            </div>
        );
    }    
}

export default TodoItem;