import React from 'react';
import PizzaDetail from './pizzeriadetails';
import axios from 'axios';


class PizzaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzerias: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/')
            .then((response) => {
                console.log('Is this still running twice?')
                this.setState({ pizzerias: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        //fetch('http://localhost:8000', { mode: 'cors' })
        //    .then((response) => response.json())
        //    .then((response) => console.log(response));
    }

    render() {
        return (
            <ul className='pizzeria-list'>
                {this.state.pizzerias.map((pizzeria) => (
                    <li
                        className='pizzeria-entry'
                        key={pizzeria.id} >
                        {pizzeria.name} - {pizzeria.city}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PizzaList;