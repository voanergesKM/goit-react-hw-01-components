import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { Friends } from './Friends/FriendList';
import { Table } from './Transaction/Table';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Profile user={user} />
        <Statistic stats={data} title="Upload stats" />
        <Friends friends={friends} />
        <Table
          transactions={transactions}
          typeTitle="Type"
          amountTitle="Amount"
          currencyTitle="Currency"
        />
      </ThemeProvider>
    </>
  );
};
