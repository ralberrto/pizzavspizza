import React from 'react';
import axios from 'axios';


class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip_code: '',
            website: '',
            phone_number: '',
            description: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post(process.env.REACT_APP_URL.concat('/create/'), {
                name: this.state.name,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zip_code: this.state.zip_code,
                website: this.state.website,
                phone_number: this.state.phone_number,
                description: this.state.description,
                email: this.state.email,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }

    render() {
        const {
            name,
            street,
            city,
            state,
            zip_code,
            website,
            phone_number,
            description,
            email,
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Pizzeria
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    Address
                    <input
                        type='text'
                        name='street'
                        value={street}
                        onChange={this.handleChange}
                    />
                    City
                    <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={this.handleChange}
                    />
                    State
                    <input
                        type='text'
                        name='state'
                        value={state}
                        onChange={this.handleChange}
                    />
                    Zip
                    <input
                        type='text'
                        name='zip_code'
                        value={zip_code}
                        onChange={this.handleChange}
                    />
                    Website
                    <input
                        type='url'
                        name='website'
                        value={website}
                        onChange={this.handleChange}
                    />
                    Phone
                    <input
                        type='tel'
                        name='phone_number'
                        value={phone_number}
                        onChange={this.handleChange}
                    />
                    Description
                    <input
                        type='textarea'
                        name='description'
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default PizzaForm;