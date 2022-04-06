import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/CLOSE.svg';
import incomingImage from '../../assets/Entradas.svg';
import outcomingImage from '../../assets/Saídas.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        className='react-close-modal'
        type='button'
        onClick={onRequestClose}
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container>
        <h2>Cadastrar uma nova transação</h2>
        <input placeholder='Titulo' type='number' />
        <input placeholder='Valor' />

        <input placeholder='Categories' />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === 'deposit'}
            type='button'
            onClick={() => setType('deposit')}
          >
            <span>
              Entrada
              <img src={incomingImage} alt='Entrada' />
            </span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            type='button'
            onClick={() => setType('withdraw')}
          >
            <span>
              Saída
              <img src={outcomingImage} alt='Saída' />
            </span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };
