import React from 'react';

import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
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
                        <div className="col-6">
                            <Badge
                                firstName="Santiago"
                                lastName="Sosa"
                                avatarUrl="https://s.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?s=80"
                                jobTitle="QA Automation Engineer"
                                instagram="santii.moniel"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew