import { Container } from './style';

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>TITULO</th>
            <th>VALOR</th>
            <th>CATEGORIA</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2020</td>
          </tr>

          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">- R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
