// app1: Basic HTML

var app1 = React.createElement('div', {}, 'app1');

ReactDOM.render(app1, document.getElementById('app1'));

// app2: Shorthand

var h = React.createElement;
var app2 = h('div', {}, 'app2');

ReactDOM.render(app2, document.getElementById('app2'));

// app3: Components

function Component1() {
    return React.createElement('div', {}, 'component1')
}

var TestClass = React.createClass({
    render: function() {
        return React.createElement('div', {}, 'My name is: ' + this.props.name);
    }
});

var app3 = 
h('div', {}, 
    h('h1', {}, 'hello cnug'), 
    h(TestClass, { name: 'Rasmus' }));

ReactDOM.render(app3, document.getElementById('app3'));
