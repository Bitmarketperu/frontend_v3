import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import E404 from "./pages/404/404";
import Dashboard from "./pages/dashboard/dashboard";
import Swap from "./pages/swap/swap";

const Router = () => {
    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/404">
                <E404/>
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/swap">
                <Swap />
            </Route>
        </Switch>
    )
}
export default Router