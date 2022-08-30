import { FriendName } from './FriendDescr.styled';

export const Friend = ({ friends }) => {
  return <FriendName>{friends.name}</FriendName>;
};
