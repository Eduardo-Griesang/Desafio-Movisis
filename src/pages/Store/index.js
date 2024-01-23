import {
  Container,
  Header,
  Lista,
  Produtos,
} from './styles';
import produtos from './produtos.json';
import Produto from 'components/Produto';
import NavBar from './NavBar';


function Feira() {
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2>Olá!</h2>
        </div>
        <p>Encontre os melhores produtos para seu setup!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        <Produtos>
          {produtos.map(produto => (
            <Produto
              {...produto}
              key={produto.id}
            />
          ))}
        </Produtos>
      </Lista>
    </Container>
  )
}

export default Feira;