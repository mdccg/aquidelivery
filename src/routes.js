import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './screens/Home';
import Login from './screens/Login';
import Cardapio from './screens/Cardapio';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cardapio" component={Cardapio} />
    </Switch>
  </BrowserRouter>
);

export default routes;