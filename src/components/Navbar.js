import React from 'react';

import './styles/Navbar.css';
import logo from '../images/Banco_galicia_logo.png';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
    <div className="Navbar">
      <div className="Badge__header">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
          {/*<span className="font-weight-light">Platzi</span>*/}
          {/*<span className="font-weight-bold">Conf</span>*/}
        </Link>
      </div>
    </div>
    );
  }
}

export default Navbar;
