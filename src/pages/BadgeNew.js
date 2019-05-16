import React from "react";
import Navbar from "../components/Navbar";
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css'
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*<div className="BadgeNew__hero">*/}
        {/*  <img className="img-fluid" src={header} alt="Logo"/>*/}
        {/*</div>*/}

        <div className="container">
          <div className="row">

            <div className="col-6">
                <BadgeForm/>
            </div>

            <div className="col-6">
                <Badge firstName='Créditos'
                     lastName="Empresa"
                     email="ssosa@bancogalicia.com.ar"
                     jobTitle="Créditos Ágiles y al instante"
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
