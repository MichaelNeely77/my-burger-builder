import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

import Layout from './hoc/Layout/Layout';



function App() {
  return (
    <div>
      <Layout>
        <Route path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Layout>


    </div>
  );
}

export default App;
