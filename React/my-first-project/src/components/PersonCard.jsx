import React, { Component } from 'react';
    
    
class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseAge =() => {
        this.setState({ age: this.state.age + 1 });

    }

    render() {
        return (
            <>
            <div className="personList">
                <h3>{this.props.lastName}, {this.props.firstName}</h3>
                <h5>Age: {this.state.age}</h5>
                <h5>Hair Color: {this.props.hairColor}</h5>
                <button onClick={this.increaseAge}>Birthdate Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
            </>
            )
    }
}
    
export default PersonCard;