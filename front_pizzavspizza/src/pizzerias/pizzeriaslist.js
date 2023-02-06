import React from 'react';
import DummyData from './dummydata.json';
import PizzaDetail from './pizzeriadetails';


class PizzaList extends React.Component {
    render() {
        return (
            <div className='pizzeria-list'>
                {DummyData.map((pizzeria) => (
                    <PizzaDetail key={pizzeria.id} pizzeria={pizzeria} />
                ))}
            </div>
        );
    }
}

export default PizzaList;