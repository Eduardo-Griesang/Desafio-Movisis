import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feira from 'pages/Feira';
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
                  <Feira />
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