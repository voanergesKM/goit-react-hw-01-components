import PropTypes from 'prop-types';
import { StyledList } from './StatList.styled';
import { ListItem } from '../ListItem/ListItem';

export const List = ({ stats }) => {
  return (
    <StyledList>
      {stats.map(stat => (
        <ListItem stats={stat} key={stat.id} />
      ))}
    </StyledList>
  );
};

List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
