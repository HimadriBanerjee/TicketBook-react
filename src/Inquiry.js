import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class FormEq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            contact: null,
            age: null,
            address: null,
            idCard: null,
            passengertype:null,
            submitted: false
        }
    }
    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }
    submitHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/enquire/ticket/'+this.state.id)
        .then(response => {
            console.log(response);
            this.setState({submitted: true, contact: response.data.contact, name: response.data.name,age:response.data.age,address:response.data.address,idCard:response.data.idCard,passengertype:response.data.passengertype});
            console.log('Latest: '+this.state.contact);
            alert("Details fetched!")
        });
      }
    render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1> Welcome to Inquiry</h1>
              <p>Enter Passenger ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <PassengerInfo value = {this.state}/>}
            </div>
          );
    }
}
    