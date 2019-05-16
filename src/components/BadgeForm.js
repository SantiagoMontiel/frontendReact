import React from 'react';

class BadgeForm extends React.Component{

  handleSubmit = e => {
    e.preventDefault();
    console.log("Button was submited");
    console.log(this.props.formValues);
  };

  render() {

    return <div>
            <h1>Creá un Nuevo Acuerdo</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Monto</label>
                  <input onChange={this.props.onChange} className="form-control" type="number" name="amount" value= {this.props.formValues.amount}/>

                  <label htmlFor="">Fecha de inicio</label>
                  <input onChange={this.props.onChange} className="form-control" type="date" name="startDate" value={this.props.formValues.startDate}/>

                  <label htmlFor="">Fecha de fin</label>
                  <input onChange={this.props.onChange} className="form-control" type="date" name="expirationDate" value={this.props.formValues.expirationDate}/>

                  <label htmlFor="">Cuenta</label>
                  <input onChange={this.props.onChange} className="form-control" type="number" name="account" value={this.props.formValues.account}/>
                </div>
              </form>
          </div>
  }
}

export default BadgeForm;