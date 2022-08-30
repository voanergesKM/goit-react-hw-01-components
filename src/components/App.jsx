import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

import { Profile } from 'components/Profile/Profile';
import { Statistic } from './Statistics/Container';
import { Friends } from './Friends/FriendList';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Profile user={user} />
        <Statistic stats={data} title="Upload stats" />
        <Friends friends={friends} />
      </ThemeProvider>
    </>
  );
};
