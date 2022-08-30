import { StyledFriend } from './FriendItem.styled';
import { FriendDescription } from '../FriendDescription/FriendDescr';

export const Friend = ({ friends }) => {
  return (
    <StyledFriend>
      <FriendDescription friends={friends} />
    </StyledFriend>
  );
};
