import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions').then((res) => console.log(res.data));
  }, []);

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
