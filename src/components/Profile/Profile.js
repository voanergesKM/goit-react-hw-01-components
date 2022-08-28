// import PropTypes from 'prop-types';

import { Container } from 'components/Profile/Profile.styled';
import { ProfileTitle } from './ProfileTitle';
import { ProfileAvatar } from './Avatar';
import { ProfileTag } from './Tag';
import { ProfileLocation } from './Location';
import user from 'components/Profile/user.json';

export const Profile = () => {
  return (
    <Container>
      <ProfileAvatar source={user.avatar} />
      <ProfileTitle text={user.username} />
      <ProfileTag tag={user.tag} />
      <ProfileLocation location={user.location} />
    </Container>
  );
};
