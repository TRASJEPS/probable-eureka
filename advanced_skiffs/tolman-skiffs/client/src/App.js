import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewSkiff from './components/NewSkiff';
import EditSkiff from './components/EditSkiff';
import AllSkiffs from './components/AllSkiffs';
import OneSkiff from './components/OneSkiff';
import FrontPage from './components/FrontPage';
import NewUser from './components/NewUser';

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
        <EditSkiff path="/skiff/:id/edit" />
        <FrontPage path="/frontpage"/>
        <NewUser path="/new_member_signup"/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
