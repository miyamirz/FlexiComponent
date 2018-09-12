import React, { Component } from 'react';
import '../styles/styles.css';
class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            stateSelected: "Maharashtra"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);

    }
    handleInputChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleStateChange = (e) => {
        e.preventDefault();
        this.setState({ stateSelected: e.target.value });
    }

    render() {
        const states = this.props.config.items[1].values;

        return (

            <div className="container">
                <div className="textfield">
                    <label>{this.props.config.items[0].label} : </label>
                    <input type="text" placeholder={this.props.config.items[0].name} value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div className="dropdown">
                    <label >{this.props.config.items[1].label} : </label>
                    <select value={this.state.stateSelected} onChange={this.handleStateChange}>
                        <option value={states[0]}>{states[0]}</option>
                        <option value={states[1]}>{states[1]}</option>
                        <option value={states[2]}>{states[2]}</option>
                    </select>
                </div>
                <div className="submitButton">
                    <button onClick={() => this.props.onSubmit(this.state)}>Submit</button>
                </div>
            </div >
        );
    }
}

export default Flexi;

