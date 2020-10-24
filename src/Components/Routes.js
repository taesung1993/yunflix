import React from "react";
import Home from "Routers/Home";
import Movie from "Routers/Movie";
import Search from "Routers/Search";
import Show from "Routers/Show";
import Detail from "Routers/Detail";
import {Route, Switch, Redirect} from "react-router-dom";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movie" exact component={Movie}/>
        <Route path="/show" exact component={Show}/>
        <Route path="/search" exact component={Search}/>
        <Route path={["/movie/:id", "/movie/:id/personate", "/movie/:id/review"]} exact component={Detail}/>
        <Route path={["/show/:id", "/show/:id/personate", "/show/:id/review"]} exact component={Detail}/>
        <Redirect from="*" to="/"/>
      </Switch>
    );
}

export default Routes;