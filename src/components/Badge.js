import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css"

class Badge extends React.Component{

    render() {
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?s=80" alt="Avatar"/>
                    <h1>Santiago <br/> Sosa</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>QA Automation Engineer</h3>
                    <div>Ig: santii.montiel</div>
                </div>
                <div className="Badge__footer">
                    #platziConf
                </div>
            </div>
        )
    }

}

export default Badge;