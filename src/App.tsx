import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import modal from 'react-modal';

modal.setAppElement('#root');

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
};
