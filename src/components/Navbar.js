import React from 'react';

import './styles/Navbar.css';
import logo from '../images/Banco_galicia_logo.png';

class Navbar extends React.Component {
  render() {
    return (
    <div className="Navbar">
      <div className="Badge__header">
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
          {/*<span className="font-weight-light">Platzi</span>*/}
          {/*<span className="font-weight-bold">Conf</span>*/}
        </a>
      </div>
    </div>
    );
  }
}

export default Navbar;
