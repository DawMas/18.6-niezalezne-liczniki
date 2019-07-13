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

    componentWillMount() {
        console.log('Tutaj możemy wykonac operacje ale nie spowoduje ona re-renderowania')
        return false;
    },

    shouldComponentUpdate() {
        console.log('Tutaj możemy np. zatrzymać wszystkie kolejne metody cyklu życia zwracając false')
        return this.state = true;
    },

    componentWillUpdate() {
        console.log('działa podobnie jak componentWillMount, nie wolno tutaj modyfikować stanu ')
    },

    render: function () {
        return React.createElement('div', { className: 'container' },
            React.createElement('button', { className: 'addCounter', onClick: this.increment }, 'Dodaj do licznika'),
            React.createElement('button', { className: 'substractCounter', onClick: this.decrement }, 'Odejmij od licznika'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    componentDidUpdate() {
        console.log('podobnie jak w componentDidMount możemy tutaj aktualizować stan komponentu')
    },

    componentDidMount() {
        console.log('możemy tutaj zaktualizować stan komponentu - jest to najlepsze miejsce.')
    },

    componentWillReceiveProps() {
        console.log('pierwsza metoda odświeżania komponentu. możemy tutaj np. sprawdzić nowe propsy i ustawić stan komponentu')
    },

    componentWillUnmount() {
        console.log('nie przyjmuje żadnych argumentów, tutaj możemy wyczyścić wcześniej dodane elementy')
    },

});

var element = React.createElement(Counter);
var elementTwo = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(elementTwo, document.getElementById('app2'));