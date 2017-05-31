/* 
// OddLabel
class OddLabel extends React.Component<{value: number}, void> {
    render() {
        return <span style={{color: this.props.value % 2 == 1 ? 'red': null}}>{this.props.value}</span>
    }
}

// Clicker
class Clicker extends React.Component<void, { count: number}> {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return <div onClick={this.increment.bind(this)}>Clicker: <OddLabel value={this.state.count} /></div>;
    }
}

// Counter
class Counter extends React.Component<void, { count: number }> {
    intervalId: number;

    constructor() {
        super();
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <div>Counter: <OddLabel value={this.state.count} /></div>;
    }
}

let layout = (
    <div><OddLabel value={41} /><Clicker /><Counter /></div>
);

let element = document.getElementById('app');
ReactDOM.render(layout, element);
*/