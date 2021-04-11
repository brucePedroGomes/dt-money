import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import modal from 'react-modal';
import { TransactionContextProvider } from './hooks/useTransactions';

modal.setAppElement('#root');

export const App = () => {
  return (
    <TransactionContextProvider>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </TransactionContextProvider>
  );
};
