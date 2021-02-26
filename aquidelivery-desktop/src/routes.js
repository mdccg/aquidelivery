import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Principal from './screens/Principal';
import Produtos from './screens/Produtos';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" render={() => <Redirect to="/principal" />} />
      
      <Route path="/principal" component={Principal} />
      <Route path="/produtos" component={Produtos} />
    </Switch>

    <Footer />
  </BrowserRouter>
);

export default routes;