import React from 'react';
import axios from 'axios';


class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
    }

    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default PizzaForm;