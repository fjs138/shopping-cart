import React, {Component} from 'react';
class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    /*   state = {
           //shopping cart total count
           count:this.props.counter.value
       };*/



   /* styles = {
      fontSize: '10px',
      fontWeight: 'bold'
    };*/



   /*handleIncrement = () => {
       this.setState({ count: this.state.count + 1 });
   };*/

    render() {
        console.log('Counter Rendered');
        console.log('props', this.props);
        const {counter, onIncrement, onDecrement, onDelete} = this.props;
        return (
            <div className='row'>
                <div className='col-1'>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            </div>
                {/* in the next line, you can write any valid JavaScript expression between
                    the curly braces. Also notice how you need curly brackets
                    around your comments in JSX */}
                    <div className='col'>
                    <button
                    onClick={() => onIncrement(counter)}
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                        <button onClick={() => onDecrement(counter)}
                                className='btn btn-danger btn-sm m-2'>
                            Decrement
                        </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className='btn btn-danger btn-sm'>
                    Delete
                </button>
                    </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
                }
}



export default Counter;