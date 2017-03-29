// OddLabel


// Clicker
class Clicker extends React.Component<void, { count: number }> {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div onClick={() => this.increment()}>
                {this.state.count}
            </div>
        );
    }
}


// Counter 
class Counter extends React.Component<void, { count: number }> {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
    }

    render() {
        return <div>{this.state.count}</div>;
    }
}

let layout = (
    <div>Hello!</div>
);

let element = document.getElementById('app');
ReactDOM.render(layout, element);