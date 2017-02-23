console.log('file2 loaded');

module.exports = function() {
    var div = document.createElement('div');
    div.innerText = "changed";
    document.body.appendChild(div);
}