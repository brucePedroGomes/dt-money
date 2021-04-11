import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export const numberFormat = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(isNaN(value) ? 0 : value);
};

export const Summary = () => {
  const { transactions } = useTransactions();

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, current) => {
      if (current.type === 'deposit') {
        acc.deposits += current.amount;
        acc.total += current.amount;
      } else {
        acc.withdraws += current.amount;
        acc.total -= current.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{numberFormat(deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="withdraw">- {numberFormat(withdraws)}</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{numberFormat(total)}</strong>
      </div>
    </Container>
  );
};
