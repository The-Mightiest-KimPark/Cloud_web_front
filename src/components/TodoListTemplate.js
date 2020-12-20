import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                현재 재료
            </div>

            {/* <div className="mid-title">
                스마트칸
            </div> */}

            <section className="todos-wrapper">
                {children}
            </section>

            {/* <div className="mid-title">
                직접입력
            </div>

            <section className="todos-wrapper">
                {children}
            </section> */}

            <section className="form-wrapper">
                {form}
            </section>
        </main>
    );
};

export default TodoListTemplate;