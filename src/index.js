import React from 'react';
import ReactDOM from 'react-dom';
import Form from './forms'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
function Train() {
    return (
      <h3 className="train">Train</h3>
    )
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
      function Default() {
        return (<Router>
          <div>
              <ul>
                  <Link to="/passenger">Passenger</Link>      
                  <Link to="/train">Train</Link> 
                  <Link to="/ticket">Ticket</Link> 
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
        </Switch>
    </div>
  </Router>
);
}
ReactDOM.render(
    <Default />,
    document.getElementById('root')
  );