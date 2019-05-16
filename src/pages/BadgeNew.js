import React from "react";
import Navbar from "../components/Navbar";
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css'
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Confirmation from "../components/Confirmation"

class BadgeNew extends React.Component {

    state = { form: {
        amount: null,
            startDate:null,
            expirationDate: null,
            account:null}
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };

  render() {
    return (
      <div>
        <Navbar/>
        {/*<div className="BadgeNew__hero">*/}
        {/*  <img className="img-fluid" src={header} alt="Logo"/>*/}
        {/*</div>*/}

        <div className="container">
            <div>
            </div>
          <div className="row">

            <div className="col-6">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>

            <div className="col-6">
                <Badge amount={this.state.form.amount}
                     startDate={this.state.form.startDate}
                     expirationDate={this.state.form.expirationDate}
                     account={this.state.form.account}
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
