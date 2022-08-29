import { StyledTitle } from './StatsTitle.styled';

export const Title = ({ title }) => {
  return <StyledTitle>{title.toUpperCase()}</StyledTitle>;
};
