import PropTypes from 'prop-types';
import { StyledList } from './FriendList.styled';
import { Friend } from './Friend/FriendItem';

export const Friends = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => (
        <Friend key={friend.id} friends={friend}></Friend>
      ))}
    </StyledList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
