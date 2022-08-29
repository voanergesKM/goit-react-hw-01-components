import PropTypes from 'prop-types';

import { StyledContainer } from './Container.styled';
import { Title, List } from './index';

export const Statistic = ({ stats, title }) => {
  return (
    <StyledContainer>
      <Title title={title} />
      <List stats={stats} />
    </StyledContainer>
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
