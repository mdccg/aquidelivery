import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Principal from './screens/Principal';
import Produtos from './screens/Produtos';
import Financeiro from './screens/Financeiro';
import Configuracoes from './screens/Configuracoes';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" render={() => <Redirect to="/principal" />} />
      
      <Route path="/principal" component={Principal} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/financeiro" component={Financeiro} />
      <Route path="/configuracoes" component={Configuracoes} />
    </Switch>

    <Footer />
  </BrowserRouter>
);

export default routes;