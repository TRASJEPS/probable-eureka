
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

function App() {

const NotFound = () => {
    return (
      <div>
        ERROR ROUTE NOT FOUND IN PRODUCT MANAGER.  CHECK YOUR URL ENTRY AND OR HARD REFRESH.
      </div>
    )
  };

  return (
    // FRONT END PATHING!! USE THIS ON PORT 5555
    <div className="App">
      <Router>
        <AllProducts path="/" />
        <NewProduct path="/product/new" />
        <OneProduct path="/product/:id" />
        <EditProduct path="/product/:id/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
