import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './screens/Home';
import Login from './screens/Login';
import Teste from './screens/Teste';
import Cardapio from './screens/Cardapio';
import Confirmacao from './screens/Confirmacao';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/confirmacao" component={Confirmacao} />
      
      <Route exact path="/cardapio" component={Cardapio} />
      <Route exact path="/teste" component={Teste} />
    </Switch>
  </BrowserRouter>
);

export default routes;