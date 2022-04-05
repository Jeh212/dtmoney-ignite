import { useEffect } from "react";
import { api } from '../../services/axios';
import { Container } from "./styles";



function TransactionTable() {

    useEffect(() => {
        api.get('transactions').then(data => console.log(data))
    }, []);


    return (

        <Container>

            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>

                    </tr>
                </thead>

                <tbody>
                    <tr className="deposit">

                        <td>Desenvolvimento de Site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>14/03/2022</td>
                    </tr>
                    <tr className="withdraw">
                        <td>Desenvolvimento de Site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>14/03/2022</td>
                    </tr>
                </tbody>

            </table>


        </Container>



    )

}
export { TransactionTable };
