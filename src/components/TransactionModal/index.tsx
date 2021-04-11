import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Form, TransactionType, ButtonType } from './style';

type Props = {
  isOpen: boolean;
  handleCloseModel: () => void;
};

export const TransactionModal = ({ isOpen, handleCloseModel }: Props) => {
  const [state, setState] = useState<{
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
  }>({
    title: '',
    amount: 0,
    category: '',
    type: 'deposit',
  });

  const { createTransaction } = useTransactions();

  const handleNewTransaction = (e: FormEvent) => {
    e.preventDefault();

    createTransaction(state);

    setState({ title: '', amount: 0, category: '', type: 'deposit' });
    handleCloseModel();
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
            onClick={() => setState({ ...state, type: 'deposit' })}
            isActive={state.type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>

          <ButtonType
            type="button"
            onClick={() => setState({ ...state, type: 'withdraw' })}
            isActive={state.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
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
