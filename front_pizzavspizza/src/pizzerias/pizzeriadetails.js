import React from 'react';
import PizzeriaUpdate from './pizzeriaupdate';


class PizzaDetail extends React.Component {
    constructor(props) {
        super(props);
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
        this.state = {
            showComponent: false,
        };
    }

    updatePizzeriaDetails() {
        this.setState({ showComponent: true });
    }

    render() {
        const { pizzeria } = { ...this.props };


        return (
            <div
                className='pizzeria-details'
                style={{ color: "yellow" }}
            >
                <h4>{pizzeria.name}</h4>
                <h5>
                    Address: {pizzeria.street} {pizzeria.city} {pizzeria.state} {pizzeria.zip_code}
                </h5>
                <h6>Phone: {pizzeria.phone_number}</h6>
                <h6>Email: {pizzeria.email}</h6>
                <p>{pizzeria.description}</p>
                <button
                    style={{ backgroundColor: 'white' }}
                    onClick={() => this.updatePizzeriaDetails()}
                >
                    Update
                </button>
                {this.state.showComponent ? <PizzeriaUpdate pizzeriaUpdate={pizzeria} /> : null}
            </div>
        );
    }
}

export default PizzaDetail;