import React from 'react'
import BadgesList from '../components/BadgesList';
import confLogo from '../images/badge-header.svg';
import './styles/Badges.css';
import {Link} from "react-router-dom";
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Gravatar from '../components/Gravatar';

class Badges extends React.Component{

  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});
    try {
      const data = await api.badges.list();
      this.setState({loading: false, data: data})
    }catch (e) {
      this.setState({loading:false, error: e})
    }
  };

  render(){

    if(this.state.loading === true){
      return(
          <PageLoading/>
      )
    }

    if(this.state.error){
      return(
          <PageError error={this.state.error}/>
      )
    }

    return(
        <React.Fragment>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
              </div>
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
            </div>
              <BadgesList badges={this.state.data} />
            </div>
        </React.Fragment>
    )
  }
}

export default Badges;