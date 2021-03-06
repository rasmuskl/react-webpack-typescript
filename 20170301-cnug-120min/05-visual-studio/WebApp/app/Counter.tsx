import * as React from 'react';

export class Counter extends React.Component<void, { counter: number }> {
    interval: any;

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>Counter: {this.state.counter}</div>
        );
    }
}

