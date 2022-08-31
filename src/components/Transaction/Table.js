import PropTypes from 'prop-types';
import { StyledTable } from './Table.styled';
import { Head } from './Head/TableHead';
import { RowItem } from './TransactionItem/TransationItem';

export const Table = ({
  transactions,
  typeTitle,
  amountTitle,
  currencyTitle,
}) => {
  return (
    <StyledTable transactions={{ transactions }}>
      <Head
        typeTitle={typeTitle}
        amountTitle={amountTitle}
        currencyTitle={currencyTitle}
      ></Head>
      <tbody>
        {transactions.map(transaction => (
          <RowItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          ></RowItem>
        ))}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  typeTitle: PropTypes.string.isRequired,
  amountTitle: PropTypes.string.isRequired,
  currencyTitle: PropTypes.string.isRequired,

  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
