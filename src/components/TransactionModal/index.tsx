import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Form, TransactionType, ButtonType } from './style';

type Props = {
  isOpen: boolean;
  handleCloseModel: () => void;
};

export const TransactionModal = ({ isOpen, handleCloseModel }: Props) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [state, setState] = useState({ title: '', amount: 0, category: '' });

  const handleNewTransaction = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      ...state,
      type,
    };

    api.post('/transactions', data);
  };

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
      <Form onSubmit={handleNewTransaction}>
        <h1>Cadastrar transação</h1>

        <input
          placeholder="Titulo"
          value={state.title}
          onChange={(event) => setState({ ...state, title: event.target.value })}
        />

        <input
          placeholder="Valor"
          type="number"
          value={state.amount}
          onChange={(event) => setState({ ...state, amount: +event.target.value })}
        />

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

        <input
          placeholder="Categoria"
          value={state.category}
          onChange={(event) => setState({ ...state, category: event.target.value })}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
