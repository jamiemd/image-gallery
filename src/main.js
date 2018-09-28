import Router from "fusion-plugin-react-router";
import Styletron from "fusion-plugin-styletron-react";
import root from "./root.js";
import React from "react";
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken
} from "fusion-plugin-react-redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import App from "fusion-react";
import reducer from "./reducers/albums";
import routes from "./server/routes";

export default function start() {
  const app = new App(root);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(Styletron);
  app.register(Router);
  app.register(EnhancerToken, applyMiddleware(ReduxThunk));
  __NODE__ && app.register(routes);
  __NODE__ &&
    app.register(GetInitialStateToken, async ctx => ({
      showDeleteImagePopupBool: false,
      showImagePopupBool: false,
      showDeleteAlbumPopupBool: false,
      redirectToHome: false
    }));

  return app;
}
