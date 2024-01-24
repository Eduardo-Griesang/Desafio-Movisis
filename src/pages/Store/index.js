import {
  Container,
  Header,
  Lista,
  Produtos,
} from './styles';
import Produto from 'components/Produto';
import NavBar from './NavBar';
import Filter from './Filter';
import { useEffect, useState } from 'react';

function Store() {

  const [ filter, setFilter ] = useState("data de inclusão")
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ produtosOriginais, setProdutosOriginais ] = useState([
    {
      "nome": "Monitor Gamer Asus TUF",
      "foto": "monitor-gamer-asus",
      "data": "27/01/24",
      "valor": 1850.99,
      "id": "1"
    },
    {
      "nome": "PC Gamer Core I7, RTX 4090",
      "foto": "computador-gamer",
      "data": "27/01/24",
      "valor": 32849.99,
      "id": "2"
    },
    {
      "nome": "Mouse Logitech G502",
      "foto": "mouse-logitech",
      "data": "27/01/24",
      "valor": 599.00,
      "id": "3"
    },
    {
      "nome": "Teclado Razer Blackwidow",
      "foto": "teclado-razer",
      "data": "27/01/24",
      "valor": 1699.99,
      "id": "4"
    },
    {
      "nome": "Headset HyperX Cloud Alpha",
      "foto": "headset-hyperX",
      "data": "27/01/24",
      "valor": 999.99,
      "id": "5"
    },
    {
      "nome": "Mouse Pad Extra Grande Logitech",
      "foto": "mousepad",
      "data": "27/01/24",
      "valor": 347.99,
      "id": "6"
    },
    {
      "nome": "Controle Microsoft Xbox",
      "foto": "controle-xbox",
      "data": "27/01/24",
      "valor": 363.90,
      "id": "7"
    },
    {
      "nome": "Webcam Logitech C922",
      "foto": "webcam",
      "data": "27/01/24",
      "valor": 662.31,
      "id": "8"
    }
  ])
  const [ produtos, setProdutos ] = useState([...produtosOriginais])

  useEffect(() => {
    let sortedProdutos = [...produtosOriginais];

    if (filter === "preço decrescente") {
      sortedProdutos = sortedProdutos.sort((a, b) => b.valor - a.valor);
    } else if (filter === "preço crescente") {
      sortedProdutos = sortedProdutos.sort((a, b) => a.valor - b.valor);
    } else if (filter === 'ordem alfabética') {
      sortedProdutos = sortedProdutos.sort((a, b) => a.nome.localeCompare(b.nome));
    } else {
      sortedProdutos = sortedProdutos.sort((a, b) => new Date(a.data) - new Date(b.data));
    }

    const filteredProdutos = sortedProdutos.filter(
      (produto) => produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setProdutos(filteredProdutos);

  }, [filter, searchTerm, produtosOriginais])

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2>Olá!</h2>
        </div>
        <p>Encontre os melhores produtos para seu setup!</p>
      </Header>
      <Filter ordenacao={setFilter} search={searchTerm} setSearch={setSearchTerm} />
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

export default Store;