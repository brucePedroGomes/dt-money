import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Form, TransactionType } from './style';

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

        <TransactionType>
          <button>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button>
            <img src={outcomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
        </TransactionType>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
