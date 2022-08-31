import PropTypes from 'prop-types';
import { StyledFriend } from './FriendItem.styled';
import { FriendDescription } from '../FriendDescription/FriendDescr';

export const Friend = ({ friends }) => {
  return (
    <StyledFriend>
      <FriendDescription friends={friends} />
    </StyledFriend>
  );
};

Friend.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
