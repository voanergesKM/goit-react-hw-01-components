import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

import { Profile } from 'components/Profile/Profile';
import { Statistic } from './Statistics/Container';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Profile user={user} />
        <Statistic stats={data} title="Upload stats" />
      </ThemeProvider>
    </>
  );
};
