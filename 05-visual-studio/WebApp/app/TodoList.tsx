import * as React from 'react';

import { TodoTextBox } from './TodoTextBox';
import Api from './api/Api';

export class TodoList extends React.Component<void, { todos: TodoItem[] }> {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        Api.getTodos().then(todos => {
            this.setState({ todos })
        });
    }

    addTodo(title) {
        Api.addTodo(title).then(todo => {
            this.setState({
                todos: this.state.todos.concat(todo)
            });
        });
    }

    checkboxChanged(todoId: number, checked: boolean) {
        Api.toggleCompletion(todoId, checked).then(completed => {
            let todos = this.state.todos.slice();

            for (let todo of todos) {
                if (todo.id === todoId) {
                    todo.completed = completed;
                }
            }

            this.setState({todos})
        });
    }

    clearCompleted(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        Api.clearCompleted().then(todos => {
            this.setState({ todos });
        });
    }

    render() {
        return (
            <div>
                <TodoTextBox onSubmit={title => this.addTodo(title)} />
                {this.state.todos.map(todo =>
                    <div key={todo.id} className="todo-item" onClick={() => this.checkboxChanged(todo.id, !todo.completed)}>
                        <input type="checkbox" checked={todo.completed} readOnly={true} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                    </div>)}
                <div className="toolbar">
                    <button onClick={evt => this.clearCompleted(evt)}>Clear completed</button>
                </div>
            </div>
        );
    }    
}