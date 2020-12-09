import React from 'react';
import ReactDOM from 'react-dom';
import Form from './PassengerForm';
import FormCan from './Cancel';
import FormEq from './Inquiry';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Train() {
    return (
      <h3 className="train">Train</h3>
    )
}
    function Passenger() {
        return (
          <h3 className="passenger">Passenger</h3>
        )
      }
      function Ticket() {
        return (
          <h2>Ticket</h2>
        )
      }
        function cancellation() {
          return (
            <h2>cancellation</h2>
          )
      }
      function Default() {
        return (<Router>
          <div>
              <ul>
              <Link to="/passenger"><Button variant="/passenger">Passenger Booking</Button>{ '---->'}</Link>           
              <Link to="/train"><Button variant="/train">TrainList</Button>{ '---->'}</Link>
              <Link to="/ticket"><Button variant="/ticket">TicketDetails</Button>{ '---->'}</Link>
              <Link to="/cancellation"><Button variant="/cancellation">Cancellation</Button></Link>
                  </ul>
                  <Switch>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/ticket">
          <Ticket />
        </Route>
        <Route path="/passenger">
          <Form/>
        </Route>
        <Route path="/cancellation">
          <FormCan/>
          </Route>
        </Switch>
    </div>
  </Router>
);
}
ReactDOM.render(
    <Default />,
    document.getElementById('root')
  );
