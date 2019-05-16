import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/Banco_galicia_logo.png';

class Badge extends React.Component {

    handleClick = e => {
        console.log("Button was clicked");
    };
  render() {
    return (
    <div className="Badge">
        {/*<div className="Badge__header">*/}
        {/*    <img src={confLogo} alt="Logo deL Banco"/>*/}
        {/*</div>*/}

        <div className="Badge__section-name">
            <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
            <h3> Crearás un acuerdo por: <br/>${this.props.amount}</h3>
        </div>

        <div className="Badge__section-info">
            <h3>Desde: {this.props.startDate}</h3>
            <h3>Hasta: {this.props.expirationDate}</h3>
        </div>
            <div className="Badge__footer">
                Sobre la cuenta: {this.props.account}
            </div>
        <button onClick={this.handleClick} className="btn btn-primary float-right">Continuar</button>
        </div>
    );
  }
}

export default Badge;
