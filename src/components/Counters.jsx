import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() {
        const { counters, onIncrement, onDelete, onReset } = this.props;
        return (
            <div>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                    />
                ))}
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
            </div>
        );
    }
}

export default Counters;
