import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import '../css/item.css'
import '../css/global.css'
import '../css/cart.css'

import App from "../pages/App"
import OrderForm from "../pages/OrderForm";
import Cart from '../pages/Cart'


const Routes = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <App />
            </Route>
            <Route path="/order-form" exact>
              <OrderForm/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
            <Route path="*" exact>
              <h1>PAGE NOT FOUND - 404</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default Routes;
