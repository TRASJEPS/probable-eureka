
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewSkiff from './components/NewSkiff';
import EditSkiff from './components/EditSkiff';
import AllSkiffs from './components/AllSkiffs';
import OneSkiff from './components/OneSkiff';

function App() {

const NotFound = () => {
    return (
      <div>
        ERROR ROUTE NOT FOUND.  CHECK YOUR URL ENTRY.
      </div>
    )
  };

  return (
    // FRONT END PATHING!! USE THIS ON PORT 3000
    <div className="App">
      <Router>
        <AllSkiffs path="/" />
        <NewSkiff path="/skiff/new" />
        <OneSkiff path="/skiff/:id" />
        {/* REMEMBER THAT PROPS CAN TRANSFER INTO MULTIPLE COMPONENTS  */}
        {/* <OneSkiff path="/skiff/:id/:category" /> */}
        {/* <OneSkiff path="/issue/:category/:subCategory/:id" />   GRACE SETUP  */}
        <EditSkiff path="/skiff/:id/edit" />   {/* FRONT END PATH */}
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
