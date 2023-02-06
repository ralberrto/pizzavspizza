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
            <div className='pizzeria-list'>
                {this.state.pizzerias.map((pizzeria) => (
                    <PizzaDetail key={pizzeria.id} pizzeria={pizzeria} />
                ))}
            </div>
        );
    }
}

export default PizzaList;