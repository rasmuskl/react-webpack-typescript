class Test extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello CNUG!</h1>
            </div>
        );
    }
}

let element = document.getElementById('app');
ReactDOM.render(<Test/>, element);