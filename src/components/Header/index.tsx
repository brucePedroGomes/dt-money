import { useState } from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { TransactionModal } from '../TransactionModal';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModel = () => {
    setIsModalOpen(true);
  };

  const handleCloseModel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={handleOpenModel}>Nova transação</button>
        <TransactionModal isOpen={isModalOpen} handleCloseModel={handleCloseModel} />
      </Content>
    </Container>
  );
};
