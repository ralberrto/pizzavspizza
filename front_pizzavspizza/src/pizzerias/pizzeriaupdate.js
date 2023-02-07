import React from "react";
import axios from "axios";


class PizzeriaUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeriaObj: this.props.pizzeriaUpdate,
            value: this.props.pizzeriaUpdate.description,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .patch('http://127.0.0.1:8000'.concat(this.state.pizzeriaObj.update), {
                description: this.state.value,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));

    }

    render() {
        const {
            pizzeriaUpdate,
            value,
        } = { ...this.state };

        return (
            <form onSubmit={this.handleSubmit}>
                <h6>Updating</h6>
                <input
                    type='text'
                    value={value}
                    onChange={this.handleChange}
                />
                <input type='submit' value='Submit' />

            </form>
        );
    }
}

export default PizzeriaUpdate;