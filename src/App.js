import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { routes } from './app/app.routes';
import { history } from './app/helpers/history.helper';

import './app.scss';

const SearchBarContainer = React.lazy(() => import('./app/modules/search-bar/search-bar.container'));

function App() {
  return (
    <div className="app-cont">
      <Router history={history}>
        <Suspense fallback={null}>
          <SearchBarContainer />
          <Switch>
            {routes.map(({ path, view: Component, routes, exact }, i) => (
                <Route
                  key={i}
                  exact={exact}
                  path={path}
                  render={props => (<Component {...props} routes={routes} />)}
                />
              ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
