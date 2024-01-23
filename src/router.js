import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from 'pages/Store';
import CarrinhoProvider from 'common/contexts/Carrinho';
import Carrinho from 'pages/Carrinho';
import { PagamentoProvider } from 'common/contexts/Pagamento';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PagamentoProvider>
            <CarrinhoProvider>
              <Switch>
                <Route exact path="/">
                  <Store />
                </Route>
                <Route path="/carrinho">
                  <Carrinho />
                </Route>
              </Switch>
            </CarrinhoProvider>
        </PagamentoProvider>
      </Switch>
    </Router>
  )
};