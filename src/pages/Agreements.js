import React from 'react'
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import Margin from "../components/Margin"

class Agreements extends React.Component{


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };

    constructor(props){
        super(props);
        console.log("1. constructor()");
        this.state = {form: {
            amount: null,
            startDate:null,
            expirationDate: null,
            account: null,
            position: null}};
    }

    componentDidMount(){
        // console.log('3. componentDidMount()');
        // this.timeoutId = setTimeout(()=>{
        //     this.setState({form: {
        //         position: 'Frontend Engineer'}})
        // },3000);
        this.fetchCharacters();
    };
    fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
        const data = await response.json();
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log("5. componentDidUpdate");
        // console.log({prevProps: prevProps, prevState: prevState});
        // console.log({props: this.props, state: this.state});
    }

    componentWillUnmount() {
        // console.log("6. componentWillUnmount");
        // clearTimeout(this.timeoutId);
    }


    render() {
        console.log("2. render()");
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
                                <Margin/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Agreements;