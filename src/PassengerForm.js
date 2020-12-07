import React from 'react';
import axios from 'axios';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           name: null,
            age: null,
            address: null,
            idCard: null,
            contact: null ,
            passengertype: null  
        }
    }
    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
      }
    ageChangeHandler = (event) => {
        this.setState({age: event.target.value});
      }
   addressChangeHandler = (event) => {
        this.setState({address: event.target.value});
      }
    idCardChangeHandler = (event) =>{
        this.setState({idCard: event.target.value});
    }
    contactChangeHandler = (event) =>{
        this.setState({contact: event.target.value})
    }
    passengertypeChangeHandler = (event) =>{
        this.setState({passengertype: event.target.value})
    }
submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/book/passenger', {
           name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            contact:  this.state.contact,
            idCard: this.state.idCard,
            passengertype: this.state.passengertype
        })
        .then(response => alert("Form submitted"));
      }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>Passenger Details</h1>
              <p>Enter your Name:</p>
              <input
                type="text"
                onChange={this.nameChangeHandler}
              />
              <p>Enter your Age:</p>
              <input
                type="text"
                onChange={this.ageChangeHandler}
              />
              <p>Enter address:</p>
              <input
                type="text"
                onChange={this.addressChangeHandler}
              />
              <p> Enter idCard: </p>
              <input
                type="text"
                onChange={this.idCardChangeHandler}
                />
              <p> Enter passengertype: </p>
              <input
                type="text"
                onChange={this.passengertypeChangeHandler}
               /> 
              <p>
              <input type='submit'/>
              </p>
            </form>
          );
    }
}