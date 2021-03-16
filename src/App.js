import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Spinner from './component/molecules/Spinner';
import './scss/style.scss';

// Containers
const TheLayout = React.lazy(() => import('./containers/templates/layout'));

// Pages
const Login = React.lazy(() => import('./containers/pages/pages/login/Login'));
const Register = React.lazy(() => import('./containers/pages/pages/register/Register'));
const Page404 = React.lazy(() => import('./containers/pages/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./containers/pages/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <Suspense fallback={<Spinner text="Mohon Tunggu ..." />}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </Suspense>
      </HashRouter>
    );
  }
}

export default App;
