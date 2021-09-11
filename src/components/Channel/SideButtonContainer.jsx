import React, { useState } from 'react';
import styled from '@emotion/styled';

import UserReadyButton from './UserReadyButton';
import Button from '../Button';
import Modal from '../Modal';

export default function SideButtonContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ButtonWrapper>
      <div className="button-wrapper">
        <Button onClick={openModal}>Ready</Button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <UserReadyButton closeModal={closeModal} isModalOpen={isModalOpen} />
        </Modal>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  padding: 10px;
`;
