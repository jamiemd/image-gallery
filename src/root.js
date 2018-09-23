// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";

import Home from "./pages/home.js";
import Album from "./pages/album.js";
import CreateAlbum from "./pages/create-album.js";

import PageNotFound from "./pages/pageNotFound.js";

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/findAlbum/:id" component={Album} />
    <Route exact path="/create-album" component={CreateAlbum} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
