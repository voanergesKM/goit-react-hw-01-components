import PropTypes from 'prop-types';
import { StyledTitle } from './StatsTitle.styled';

export const Title = ({ title }) => {
  return <StyledTitle>{title.toUpperCase()}</StyledTitle>;
};

Title.porpTypes = {
  title: PropTypes.string,
};
