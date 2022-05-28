import './styles.css';

function ModalComprarProduto({
  setAberto,
  produto: {
    _id,
    nome,
    ingredientes,
    adicionais,
    tamanhos,
    valor,
    imagem,
    categoria
  }
}) {
  return (
    <div className="modal-comprar-produto">
      <span>{nome}</span>
    </div>
  );
}

export default ModalComprarProduto;