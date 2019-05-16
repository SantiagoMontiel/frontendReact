import React, {Component} from 'react';

class Confirmation extends Component {
    render() {
        return <div>
            <h4 >Crearás un acuerdo por:</h4>
                <p>${this.props.formValues.amount}</p>
            <h4 >Desde:</h4>
                <p>{this.props.formValues.startDate}</p>
            <h4 >Hasta:</h4>
                <p>{this.props.formValues.expirationDate}</p>
            <h4 >Sobre la cuenta:</h4>
                <p>{this.props.formValues.account}</p>
        </div>
    }
}

export default Confirmation;