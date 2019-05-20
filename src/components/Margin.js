import React from 'react'

class Margin extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const divStyle = {
            width: '12rem',
        };
        return <div>

            <div className="card text-white bg-success mb-3" style={divStyle}>
                <div>
                    <h5>$500.000</h5>
                    <p>disponible</p>
                </div>
                <hr className="divider" />
                    <h6 className="card-text">El margen disponible vigente al día de la fecha.</h6>
            </div>
            
            <div className="card text-white bg-dark mb-3" style={divStyle}>
                <div>
                    <h5>$800.000</h5>
                    <p>utilizado*</p>
                </div>
                <hr className="divider" />
                    <p className="card-text">Previamente utilizado en acuerdos.</p>
            </div>

            <div className="card bg-light mb-3" style={divStyle}>
                <div>
                    <h5>$1.300.000</h5>
                    <p>de calificación vigente</p>
                </div>
                <hr className="divider" />
                    <p>Calificación vigente hasta 31/12/2019.</p>
            </div>

        </div>
    }
}

export default Margin;