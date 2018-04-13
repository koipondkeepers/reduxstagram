import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl'

//import components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, { history } from './store'

import Raven from 'raven-js';
import {sentry_url} from './data/config';

// Raven.config(sentry_url).install();

// console.log(window.doesNotExist.nope);

const router = (
    <Provider store={store}>

      <Router history ={history}>
          <Route path = "/" component = {App}> {/*This line says if there's a /, grab main*/}
              <IndexRoute component={PhotoGrid}></IndexRoute> {/*But then depending on URL Structure, either pass Photogrid to main*/}
              <Route path ="/view/:postId" component={Single}></Route>{/*Or pass single to main*/}
          </Route>
      </Router>

    </Provider>
  )

render(router, document.getElementById('root'));
