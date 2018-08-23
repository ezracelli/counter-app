import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // AJAX call to get info from server
        //this.setState({});
    }

    handleIncrement = counter => {
        console.log('handleIncrement() called on counter', counter.id);

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters: counters });
    };

    handleDelete = counterID => {
        console.log('handleDelete() called on counter', counterID);

        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters: counters });
    };

    handleReset = () => {
        console.log('handleReset() called');

        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters: counters });
    };

    render() {
        console.log('App render() called!');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
