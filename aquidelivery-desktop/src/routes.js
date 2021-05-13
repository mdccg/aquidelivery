import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Principal from './screens/Principal';
import Produtos from './screens/Produtos';
import Financeiro from './screens/Financeiro';
import Configuracoes from './screens/Configuracoes';

import AbrirFecharCaixa from './screens/AbrirFecharCaixa';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/principal" />} />
      
      <Route exact path="/principal/caixa" component={AbrirFecharCaixa} />

      <Route path="/principal" component={Principal} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/financeiro" component={Financeiro} />
      <Route path="/configuracoes" component={Configuracoes} />
    </Switch>
  </BrowserRouter>
);

export default routes;