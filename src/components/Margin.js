import React from 'react'

class Margin extends React.Component{
    render(){
        const divStyle = {width: '12rem'};
        return <div>
            <div className="card">
                <div className="card-body"  style={divStyle}>
                    <p>${this.props.amount} <br/>{this.props.type}<br/><br/>{this.props.message}</p>
                </div>
            </div>

        </div>
    }
}

export default Margin;