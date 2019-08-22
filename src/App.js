import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Products from './components/products';

function App() {
  return (
      <React.Fragment>
          <div className="d-flex" id="wrapper">
              <Sidebar/>
            <div id="page-content-wrapper">
              <Navbar onClick={handleToggle}/>
              <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/products" component={Products} />
                  <Route path="/" component={Home} />
             </Switch>
            </div>
          </div>
      </React.Fragment>
);
}

function handleToggle() {
    let ele= document.getElementById('wrapper');
    ele.classList.toggle("toggled")
}

export default App;
