import { ThemeProvider } from 'styled-components';

import { Profile } from 'components/Profile/Profile';
import { theme } from 'utils/theme';
import user from 'components/Profile/user.json';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Profile user={user} />
      </ThemeProvider>
    </>
  );
};
