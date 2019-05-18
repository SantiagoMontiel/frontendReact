import React from 'react'
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import Margin from "../components/Margin"

class Agreements extends React.Component{
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
        return<div>
            {/*<div className="BadgeNew__hero">*/}
            {/*  <img className="img-fluid" src={header} alt="Logo"/>*/}
            {/*</div>*/}

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="space">
                            <h3>Acuerdo para descubiertos</h3>
                        </div>
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                    </div>

                    <div className="col-6">
                            <div className="row">
                                <Margin amount="500.000" type="disponible" message="Tu monto disponible"/>
                            </div>
                            <div className="row">
                                <Margin amount="800.000" type="utilizado" message="Tu monto utilizado"/>
                            </div>
                            <div className="row">
                                <Margin amount="1.300.000" type="calificado" message="Tu monto calificado"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Agreements;