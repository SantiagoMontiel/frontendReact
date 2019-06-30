import React from 'react';

import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            instagram: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value}
        })
    };

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
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                avatarUrl="https://s.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?s=80"
                                jobTitle={this.state.form.jobTitle}
                                instagram={this.state.form.instagram}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew