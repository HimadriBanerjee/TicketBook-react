import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class FormCan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketID: null,   
        }
    }
    idChangeHandler = (event) => {
        this.setState({ticketID: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.delete('http://localhost:8080/Delete/ticket/ticketID'+this.state.ticketID)
        .then(response => {
          alert("TICKET CANCELLATION SUCEESSFUL");
        });
      }
      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to TICKET CANCELLATION ||</h1>
              <p>Enter ticketID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit' value="Delete"/>
              </p>
            </form>
            </div>
          );
    }
}
