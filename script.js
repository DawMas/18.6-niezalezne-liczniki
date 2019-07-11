var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function () {
        return React.createElement('div', {className: 'container' },
            React.createElement('button', {className: 'addCounter', onClick: this.increment }, 'Dodaj do licznika'),
            React.createElement('button', { className: 'substractCounter', onClick: this.decrement }, 'Odejmij od licznika'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));