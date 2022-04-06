import Logo from '../../assets/Logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewtransactionModal: () => void;
};

function Header({ onOpenNewtransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt='dt money' />

        <button type='button' onClick={onOpenNewtransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}

export { Header };
