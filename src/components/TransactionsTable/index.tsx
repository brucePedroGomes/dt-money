import { useTransactions } from '../../hooks/useTransactions';
import { numberFormat } from '../Summary';

import { Container } from './style';

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

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
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' ? '-' : '+'} {numberFormat(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
