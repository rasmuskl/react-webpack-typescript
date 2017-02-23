var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello CNUG")));
    };
    return Test;
}(React.Component));
var element = document.getElementById('app');
ReactDOM.render(React.createElement(Test, null), element);
