var adder = require('./file2');

console.log('App loaded!');

if (module.hot) {
    console.log('HMR is enabled.');

    module.hot.accept();

    module.hot.accept('./file2', function() {
        console.log('file2.js changed');
        var adder = require('./file2');
        adder();
    });

    module.hot.status(function() {
        console.log('status', arguments);
    });
}