import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type Transactions = {
  id: number;
  title: string;
  type: 'withdraw' | 'deposit';
  category: string;
  amount: number;
  createdAt: string;
};

type ContextData = {
  transactions: Transactions[];
  createTransaction: (transaction: Omit<Transactions, 'id' | 'createdAt'>) => Promise<void>;
};

const TransactionsContext = createContext<ContextData>({} as ContextData);

export const TransactionContextProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions').then((res) => {
      setTransactions(res.data.transactions);
    });
  }, []);

  const createTransaction = async (transaction: Omit<Transactions, 'id' | 'createdAt'>) => {
    const response = await api.post('transactions', { ...transaction, createdAt: new Date() });

    setTransactions([...transactions, response.data.transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
