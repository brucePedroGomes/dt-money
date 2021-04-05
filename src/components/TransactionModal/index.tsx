import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Form, TransactionType, ButtonType } from './style';

type Props = {
  isOpen: boolean;
  handleCloseModel: () => void;
};

export const TransactionModal = ({ isOpen, handleCloseModel }: Props) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

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
          <ButtonType
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>

          <ButtonType
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Entrada</span>
          </ButtonType>
        </TransactionType>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
