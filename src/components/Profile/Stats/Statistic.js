import { StyledContainer, StatsUnit, StatItem } from './Statistic.styled';

export const Statistic = ({ followers, views, likes }) => {
  return (
    <StyledContainer>
      <StatsUnit>
        <StatItem>Followers</StatItem>
        <StatItem accent>{followers}</StatItem>
      </StatsUnit>
      <StatsUnit>
        <StatItem>Views</StatItem>
        <StatItem accent>{views}</StatItem>
      </StatsUnit>
      <StatsUnit>
        <StatItem>Likes</StatItem>
        <StatItem accent>{likes}</StatItem>
      </StatsUnit>
    </StyledContainer>
  );
};
