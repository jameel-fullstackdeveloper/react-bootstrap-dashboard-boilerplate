import React from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Home from './components/home';


function App() {
  return (
      <React.Fragment>
          <div className="d-flex" id="wrapper">
              <Sidebar/>
            <div id="page-content-wrapper">
              <Navbar/>
              <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/" component={Home} />
             </Switch>




            </div>
          </div>
      </React.Fragment>
);
}

export default App;
