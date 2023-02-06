import React from 'react';
import PizzaDetail from './pizzeriadetails';
import axios from 'axios';


class PizzaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzerias: [],
            pizzeria: null,
            showComponent: false,
        };

        this.getPizzeriaDetails = this.getPizzeriaDetails.bind(this);
        this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
    }

    getPizzeriaDetails(pizzeria) {
        const response = axios
            .get('http://127.0.0.1:8000'.concat(pizzeria.absolute_url))
            .then((response) => {
                this.setState({ pizzeria: response.data });
            })
            .catch((err) => console.log(err));
        return response;
    }

    showPizzeriaDetails(pizzeria) {
        this.getPizzeriaDetails(pizzeria)
            .then((response) => this.setState({ showComponent: true }));
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/')
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
                        key={pizzeria.id}
                        onClick={() => this.showPizzeriaDetails(pizzeria)}
                    >
                        {pizzeria.name} - {pizzeria.city}
                    </li>
                ))}
                {this.state.showComponent ? (
                    <PizzaDetail pizzeria={this.state.pizzeria} />
                ) : null}
            </ul>
        );
    }
}

export default PizzaList;