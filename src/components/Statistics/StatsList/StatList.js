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
