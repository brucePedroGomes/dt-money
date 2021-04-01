import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
};
