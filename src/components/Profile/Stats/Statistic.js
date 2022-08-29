import { StyledContainer, StatsUnit } from './Statistic.styled';

export const Statistic = ({ followers, views, likes }) => {
  return (
    <StyledContainer>
      <StatsUnit>
        <span>Followers</span>
        <span>{followers}</span>
      </StatsUnit>
      <StatsUnit>
        <span>Views</span>
        <span>{views}</span>
      </StatsUnit>
      <StatsUnit>
        <span>Likes</span>
        <span>{likes}</span>
      </StatsUnit>
    </StyledContainer>
  );
};
