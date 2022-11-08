import { Box } from 'components/Box';
import PropTypes from 'prop-types';

import { Title, List } from './index';

export const Statistic = ({ stats, title }) => {
  return (
    <Box
      as="section"
      mt={5}
      width="460px"
      textAlign="center"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Title title={title} />
      <List stats={stats} />
    </Box>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
