import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Form } from './style';

type Props = {
  isOpen: boolean;
  handleCloseModel: () => void;
};

export const TransactionModal = ({ isOpen, handleCloseModel }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModel}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={handleCloseModel}>
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Form>
        <h1>Cadastrar transação</h1>

        <input placeholder="Titulo" />

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
