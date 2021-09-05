import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export default function Modal({ children, showModal }) {
  const [isOpenModal, setIsOpenModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      setIsOpenModal(true);
    }

    return () => {
      setIsOpenModal(false);
    }
  }, [showModal]);

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      {isOpenModal && (
        <Wrapper>
          <Dimmed onClick={closeModal} />
          <StyledModal children={children} />
        </Wrapper>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  showModal: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Dimmed = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const StyledModal = styled.div`
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 450px;
  text-align: center;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.1);
`;
