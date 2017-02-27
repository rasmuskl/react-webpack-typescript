import * as React from 'react';

export class Clicker extends React.Component<void, { counter: number }> {
    interval: any;

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div onClick={this.increment.bind(this)}>Clicker: {this.state.counter}</div>
        );
    }
}

