import React from 'react';

import './styles/BadgesList.css';
import {Link} from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
          <Gravatar
              className="BadgesListItem__avatar"
              email={this.props.badge.email}
              alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
        {/*<img*/}
        {/*  className="BadgesListItem__avatar"*/}
        {/*  src={this.props.badge.avatarUrl}*/}
        {/*  alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}*/}
        {/*/>*/}

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter || this.props.badge.instagram }
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {

      if(this.props.badges.length === 0){
          return(
              <div>
                  <h3>No badges were found</h3>
                  <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
              </div>
          )

      }
      return (
          <div className="BadgesList">
            <ul className="list-unstyled">
              {this.props.badges.map(badge => {
                return (
                  <li key={badge.id}>
                    <BadgesListItem badge={badge} />
                  </li>
                );
              })}
            </ul>
          </div>
      );
  }
}

export default BadgesList;
