import { Nav } from './styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/movisis.png'

export default function NavBar() {
  const { quantidadeCarrinho } = useCarrinhoContext();
  const history = useHistory();
  return (
    <Nav>
      <div>
        <img src={logo} alt='Logo Movisis' />
        <h1>Movisis</h1>
      </div>
      <IconButton
        onClick={() => history.push('/carrinho')}
        disabled={quantidadeCarrinho === 0}
      >
        <Badge
          badgeContent={quantidadeCarrinho}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}