import { Container, Valor } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/contexts/Carrinho';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const itemNoCarrinho = carrinho.find(item => item.id === id);
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.jpg`}
            alt={`foto de ${nome}`}
          />
        </div>
        <div>
          <h3>
            {nome} - <p>R$ {valor.toFixed(2)}</p> 
          </h3>
        </div>
        <div>
          <IconButton
            onClick={() => removerProduto(id)}
            disabled={!itemNoCarrinho || itemNoCarrinho.quantidade === 0}
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          {itemNoCarrinho?.quantidade || 0}
          <IconButton
            onClick={() => adicionarProduto({
              nome,
              foto,
              id,
              valor,
              unidade
            })}
            color="primary"
          >
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)