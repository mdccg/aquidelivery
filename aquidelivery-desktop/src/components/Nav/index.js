import Chair from './../../assets/images/chair.svg';
import Group from './../../assets/images/group.svg';
import Repeat from './../../assets/images/repeat.svg';
import CashRegister from './../../assets/images/cash-register.svg';
import ShoppingCart from './../../assets/images/shopping-cart.svg';
import ExpressDelivery from './../../assets/images/express-delivery.svg';

import Tag from './../../assets/images/tag.svg';
import Bacon from './../../assets/images/bacon.svg';
import Notes from './../../assets/images/notes.svg';
import FastFood from './../../assets/images/fast-food.svg';

import NavbarGenerico from './../../components/NavbarGenerico';

const sections = {
  principal: [
    {
      title: 'Caixa',
      items: [
        { to: '/principal/caixa', ico: CashRegister, span: 'Abrir/fechar meu caixa' },
        { to: '/principal/caixa/historico', ico: Repeat, span: 'Histórico do caixa' }
      ]
    },
    {
      title: 'Vendas',
      items: [
        { to: '/principal/mesas', ico: Chair, span: 'Mesas/comandas' },
        { to: '/principal/delivery', ico: ExpressDelivery, span: 'Pedidos delivery' },
        { to: '/principal/caixa/pedido', ico: ShoppingCart, span: 'Pedido no caixa' }
      ]
    },
    {
      title: 'Clientes',
      items: [{ to: '/principal/cliente', ico: Group, span: 'Clientes' }]
    }
  ],
  
  produtos: [
    {
      title: 'Produtos',
      items: [{ to: '/produtos', ico: FastFood, span: 'Produtos' }]
    },
    {
      title: 'Organização de produtos',
      items: [
        { to: '/produtos/complementos', ico: Bacon, span: 'Complementos' },
        { to: '/produtos/observacoes', ico: Notes, span: 'Observações' },
        { to: '/produtos/categorias', ico: Tag, span: 'Categorias' }
      ]
    }
  ]
};

const Nav = {
  Principal: () => <NavbarGenerico sections={sections.principal} />,
  Produtos: () => <NavbarGenerico sections={sections.produtos} />
};

export default Nav;