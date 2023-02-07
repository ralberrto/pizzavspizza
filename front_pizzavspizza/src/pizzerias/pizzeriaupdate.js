import React from "react";


class PizzeriaUpdate extends React.Component {
    render() {
        const {
            pizzeriaUpdate,
        } = { ...this.props };

        return (
            <h1>What's up, this is {pizzeriaUpdate.name}</h1>
        );
    }
}

export default PizzeriaUpdate;