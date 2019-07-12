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

    ComponentWillMount(){
    console.log('') },

    shouldComponentUpdate(){
        console.log('') },

    componentWillUpdate(){
        console.log('') },

    render: function () {
        return React.createElement('div', {className: 'container' },
            React.createElement('button', {className: 'addCounter', onClick: this.increment }, 'Dodaj do licznika'),
            React.createElement('button', { className: 'substractCounter', onClick: this.decrement }, 'Odejmij od licznika'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    ComponentDidUpdate(){
        console.log('') },

    ComponentDidMount(){
        console.log('') },

    ComponentWillReceiveProps(){
        console.log('') },

    componentWillUnmount(){
        console.log('') },

    
});

var CounterTwo = React.createClass({
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
            React.createElement('button', {className: 'addCounter', onClick: this.increment }, 'Dodaj do licznika drugiego'),
            React.createElement('button', { className: 'substractCounter', onClick: this.decrement }, 'Odejmij od licznika drugiego'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter) ;
var elementTwo = React.createElement(CounterTwo);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(elementTwo, document.getElementById('app2'));