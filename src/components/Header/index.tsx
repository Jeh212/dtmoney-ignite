import Logo from '../../assets/Logo.svg'
import { Container, Content } from './styles'



function Header() {

    return (
        <Container>
            <Content>

                <img src={Logo} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}

export { Header }