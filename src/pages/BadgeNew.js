import React from 'react';

import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';
import api from '../api';

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

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false, error: null})
        }catch (e) {
            this.setState({loading: false, error: e})
        }
    };

    render() {
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'First name'}
                                lastName={this.state.form.lastName || 'Last name'}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle || 'Job title'}
                                instagram={this.state.form.instagram || 'Instagram'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew