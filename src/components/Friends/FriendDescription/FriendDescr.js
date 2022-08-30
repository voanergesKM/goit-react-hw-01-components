import { Status, Avatar } from './FriendDescr.styled';
import { Friend } from './FriendName';

export const FriendDescription = ({ friends }) => {
  return (
    <>
      <Status friends={friends} />
      <Avatar src={friends.avatar} alt="User avatar" width={48} />
      <Friend friends={friends} />
    </>
  );
};
