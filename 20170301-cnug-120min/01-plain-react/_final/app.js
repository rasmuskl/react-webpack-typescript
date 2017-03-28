// app1: Basic HTML

// <div>
//   <h1>app1</h1>
//   <p>Hello CNUG</p>
// </div>

var app1 = React.createElement('div', {}, React.createElement('h1', {}, 'app1'), React.createElement('p', {}, "Hello CNUG"));

ReactDOM.render(app1, document.getElementById('app1'));

// app2: Shorthand

var h = React.createElement;
var app2 = h('div', {}, h('h1', {}, 'app2'), h('p', {}, 'Hello CNUG'));

ReactDOM.render(app2, document.getElementById('app2'));

// app3: Components

function Greeter(props) {
    return React.createElement('p', {}, 'Hello ' + props.name);
}

var app3 = 
h('div', {}, 
    h('h1', {}, 'app3'), 
    h(Greeter, { name: 'CNUG' }));

ReactDOM.render(app3, document.getElementById('app3'));
