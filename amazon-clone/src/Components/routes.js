import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
// import Orders from '../Components/Orders';

export default (
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/checkout" component={Checkout}/>
    <Route path="/login" component={Login}/>
    {/* <Route path="/orders" component={}/> */}
</Switch>
)