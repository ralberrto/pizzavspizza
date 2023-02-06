import React from 'react';
import DummyData from './dummydata.json';


class PizzaList extends React.Component {
    render() {
        return (
            <div className='pizzeria-list'>
                {DummyData.map((pizzeria) => (
                    <h4 key={pizzeria.id}>{pizzeria.name} - {pizzeria.city}</h4>
                ))}
            </div>
        );
    }
}

export default PizzaList;