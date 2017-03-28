import * as React from 'react';
import { Counter } from './Counter';
import { Clicker } from './Clicker';
import { TodoList } from './TodoList';
import './app.less';

export default class App extends React.Component<void, void> {
    render() {
        return (
            <div>
                <TodoList />
                <Counter />
            </div>
        );
    }
}
