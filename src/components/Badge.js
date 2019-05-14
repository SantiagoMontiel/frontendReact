import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/Banco_galicia_logo.png';

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
        <div className="Badge__header">
            <img src={confLogo} alt="Logo deL Banco"/>
        </div>

        <div className="Badge__section-name">
            <img className="Badge__avatar" src="https://www.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?d=identicon" alt="Banner"/>
            <h1> Santi <br/> Montiel</h1>
        </div>

        <div className="Badge__section-info">
            <h3>QA Automation & Desarrollador Frontend</h3>
            <div>ssosa@bancogalicia.com.ar</div>
        </div>
            <div className="Badge__footer">
                #Baufest
            </div>
        </div>
    );
  }
}

export default Badge;
