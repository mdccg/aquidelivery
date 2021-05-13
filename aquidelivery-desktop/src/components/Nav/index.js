import Chair from './../../assets/images/chair.svg';
import Group from './../../assets/images/group.svg';
import Repeat from './../../assets/images/repeat.svg';
import CashRegister from './../../assets/images/cash-register.svg';
import ShoppingCart from './../../assets/images/shopping-cart.svg';
import ExpressDelivery from './../../assets/images/express-delivery.svg';

import Tag from './../../assets/images/tag.svg';
import Bacon from './../../assets/images/bacon.svg';
import Notes from './../../assets/images/notes.svg';
// import Trolley from './../../assets/images/trolley.svg';
import FastFood from './../../assets/images/fast-food.svg';
// import Seasoning from './../../assets/images/seasoning.svg';

import Pay from './../../assets/images/pay.svg';
import Factory from './../../assets/images/factory.svg';
import Payment from './../../assets/images/payment.svg';

import Print from './../../assets/images/print.svg';
import Backup from './../../assets/images/backup.svg';
import Padlock from './../../assets/images/padlock.svg';

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
      items: [{ to: '/produtos/produtos', ico: FastFood, span: 'Produtos' }]
    },
    {
      title: 'Organização de produtos',
      items: [
        { to: '/produtos/complementos', ico: Bacon, span: 'Complementos' },
        { to: '/produtos/observacoes', ico: Notes, span: 'Observações' },
        { to: '/produtos/categorias', ico: Tag, span: 'Categorias' }
      ]
    }
  ],

  financeiro: [
    {
      title: 'Fornecedores',
      items: [{ to: '/financeiro/fornecedores', ico: Factory, span: 'Fornecedores' }]
    },
    {
      title: 'Contas a pagar/receber',
      items: [
        { to: '/financeiro/contas-a-pagar', ico: Pay, span: 'Contas a pagar' },
        { to: '/financeiro/contas-a-receber', ico: Payment, span: 'Contas a receber' }
      ]
    }
  ],

  configuracoes: [
    {
      title: 'Configurações',
      items: [
        { to: '/configuracoes/impressora', ico: Print, span: 'Impressora' },
        { to: '/configuracoes/alterar-senha', ico: Padlock, span: 'Alterar minha senha' },
        { to: '/configuracoes/opcoes-backup', ico: Backup, span: 'Opções de backup' }
      ]
    }
  ]
};

const Nav = {
  Principal: () => <NavbarGenerico sections={sections.principal} />,
  Produtos: () => <NavbarGenerico sections={sections.produtos} />,
  Financeiro: () => <NavbarGenerico sections={sections.financeiro} />,
  Configuracoes: () => <NavbarGenerico sections={sections.configuracoes} />
};

export default Nav;