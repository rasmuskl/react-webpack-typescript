require('./styles.css');

function addMessage(text) {
    var div = document.createElement('div');
    div.innerText = text;
    document.body.appendChild(div);
}

addMessage('App loaded.');

var dependencyText = require('./dependency');
addMessage('dependency: ' + dependencyText);

if (module.hot) {
    module.hot.accept('./dependency', function() {
        console.log('reloading: dependency.js');

        var newDependencyText = require('./dependency');
        addMessage('dependency: ' + newDependencyText);
    });
}