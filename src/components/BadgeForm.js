import React from 'react';

class BadgeForm extends React.Component{

  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value});
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Button was submited");
  };

  render() {
    return <div>
            <h1>Creá tu Nuevo Acuerdo</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Monto</label>
                  <input onChange={this.handleChange} className="form-control" type="number" name="firstName"/>

                  <label htmlFor="">Fecha de inicio</label>
                  <input onChange={this.handleChange} className="form-control" type="date" name="firstName"/>

                  <label htmlFor="">Fecha de fin</label>
                  <input onChange={this.handleChange} className="form-control" type="date" name="firstName"/>

                  <label htmlFor="">Cuenta</label>
                  <input onChange={this.handleChange} className="form-control" type="number" name="firstName"/>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Continuar</button>
              </form>
          </div>
  }
}

export default BadgeForm;