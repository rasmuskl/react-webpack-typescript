var element = document.getElementById('app');

// NO JSX

function MyComponent(props) {
    return React.createElement('div', {}, 'My name is: ' + props.name)
}

var TestClass = React.createClass({
    render: function() {
        return React.createElement('div', {}, 'My name is: ' + this.props.name);
    }
});

var Test = React.createFactory(TestClass);

var root = React.createElement('div', {}, 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'hello cnug'), React.createElement(Test, { name: 'Rasmus' })));

// Function
var h = React.createElement;

var root2 = h('div', {}, h('div', {}, 'test'));

ReactDOM.render(root, element);