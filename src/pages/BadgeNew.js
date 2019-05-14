import React from "react";
import Navbar from "../components/Navbar";
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css'
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName='Santi'
                     lastName="Montiel"
                     email="ssosa@baufest.com.ar"
                     jobTitle="QA Automation & Desarrollador Frontend"
                     avatarUrl="https://www.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?d=identicon"
              />
            </div>
          </div>
          </div>

        </div>
    );
  }
}
export default BadgeNew;
