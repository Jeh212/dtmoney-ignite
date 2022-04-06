import Modal from 'react-modal';
import closeImg from '../../assets/CLOSE.svg';
import incomingImage from '../../assets/Entradas.svg';
import outcomingImage from '../../assets/Saídas.svg';
import { Container, TransactionTypeContainer } from './styles';
Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
          <button type='button'>
            <span>
              Entrada
              <img src={incomingImage} alt='Entrada' />
            </span>
          </button>
          <button type='button'>
            <span>
              Saída
              <img src={outcomingImage} alt='Saída' />
            </span>
          </button>
        </TransactionTypeContainer>

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };
