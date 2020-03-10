import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    // props include data that we give to a component, read only
    // state includes data that is local or private to that component
    state = {
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}

        ]
    };

    handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    console.log(this.state.counters[0]);
};

    handleReset = () => {
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);this.setState({counters});
    };

    render() {
        return (
        <div>

            <button
                onClick={this.handleReset}
                className='btn btn-primary btn-sm m-2'>
            Reset
        </button>

            { this.state.counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    counter={counter}/>
            ))}
        </div>
        );

    }

}

export default Counters;