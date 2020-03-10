import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    // props include data that we give to a component, read only
    // state includes data that is local or private to that component


    render() {
        console.log('Counters - Rendered');
        return (
        <div>

            <button
                onClick={this.props.onReset}
                className='btn btn-primary btn-sm m-2'>
            Reset Quantities
        </button>
            <button
                onClick={() => window.location.reload(false)}
                className='btn btn-primary btn-sm m-2'>
                Reset Cart</button>

            { this.props.counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    counter={counter}
                />
            ))}
        </div>
        );

    }

}

export default Counters;