import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';

import { Container, Content } from './styles';

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
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModel}>
          <h2>ok</h2>
        </Modal>
      </Content>
    </Container>
  );
};
