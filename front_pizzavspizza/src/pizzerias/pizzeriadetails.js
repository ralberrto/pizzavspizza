import React from 'react';
import DummyData from './dummydata.json';


class PizzaDetail extends React.Component {
    render() {
        const { pizzeria } = { ...this.props };

        return (
            <div className='pizzeria-details'>
                <h4>{pizzeria.name}</h4>
                <h4>{pizzeria.city}</h4>
            </div>
        );
    }
}

export default PizzaDetail;