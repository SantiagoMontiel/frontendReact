import React from 'react';

import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Santiago"
                                lastName="Sosa"
                                avatarUrl="https://s.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?s=80"
                                jobTitle="QA Automation Engineer"
                                instagram="santii.moniel"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew