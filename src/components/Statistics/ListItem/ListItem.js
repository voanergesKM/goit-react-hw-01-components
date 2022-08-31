import PropTypes from 'prop-types';
import { StyledItem, StyledPiece } from './ListItem.styled';

export const ListItem = ({ stats }) => {
  return (
    <StyledItem>
      <StyledPiece>{stats.label}</StyledPiece>
      <StyledPiece number>{stats.percentage}&#37;</StyledPiece>
    </StyledItem>
  );
};

ListItem.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
