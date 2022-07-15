import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./components/home/home";

const Router = () => {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
export default Router