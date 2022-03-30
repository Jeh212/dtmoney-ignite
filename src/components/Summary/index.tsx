import Incoming from '../../assets/Entradas.svg';
import Saida from '../../assets/Saídas.svg';
import Total from '../../assets/Total.svg';
import { Container } from "./styles";


function Summary() {

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Incoming} alt="entradas" />
                </header>
                <strong>R$ 100,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saida} alt="Saídas" />
                </header>
                <strong>R$ -50,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>R$ 50,00</strong>
            </div>

        </Container>
    )



};
export { Summary };
