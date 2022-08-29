import PropTypes from 'prop-types';

import { Container } from 'components/Profile/Profile.styled';
import { Avatar, Title, Tag, UserLocation, Statistic } from './index';

export const Profile = ({ user }) => {
  return (
    <Container>
      <Avatar source={user.avatar} />
      <Title name={user.username} />
      <Tag tag={user.tag} />
      <UserLocation location={user.location} />
      <Statistic
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Container>
  );
};

Profile.propTypes = {
  Profile: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: {
        followers: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired,
        likes: PropTypes.string.isRequired,
      },
    })
  ),
};
