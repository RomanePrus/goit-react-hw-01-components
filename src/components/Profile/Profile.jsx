import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatusList,
  StatusItem,
  StatusLabel,
  StatuQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} width="100px" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatusList>
        <StatusItem>
          <StatusLabel>Followers</StatusLabel>
          <StatuQuantity>{stats.followers}</StatuQuantity>
        </StatusItem>
        <StatusItem>
          <StatusLabel>Views</StatusLabel>
          <StatuQuantity>{stats.views}</StatuQuantity>
        </StatusItem>
        <StatusItem>
          <StatusLabel>Likes</StatusLabel>
          <StatuQuantity>{stats.likes}</StatuQuantity>
        </StatusItem>
      </StatusList>
    </ProfileCard>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
