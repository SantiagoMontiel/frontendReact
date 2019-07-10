import React from 'react';

import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeEdit.css';
import api from '../api';
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{

    state = {
        loading: true,
        error: null,
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

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, form:data});
        }catch (e) {
            this.setState({loading: false, error: e})
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading:true});
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({loading: false, error: null});
            this.props.history.push('/badges');
        }catch (e) {
            this.setState({loading: false, error: e})
        }
    };

    render() {
        if(this.state.loading){
            return <PageLoading/>;
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit