import { StyledItem, StyledPiece } from './ListItem.styled';

export const ListItem = ({ stats }) => {
  return (
    <StyledItem>
      <StyledPiece>{stats.label}</StyledPiece>
      <StyledPiece number>{stats.percentage}&#37;</StyledPiece>
    </StyledItem>
  );
};
