import React from 'react';


class PizzaDetail extends React.Component {
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
            </div>
        );
    }
}

export default PizzaDetail;