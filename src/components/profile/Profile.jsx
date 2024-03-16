import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css['general-div']}>
      <div className={css['user-inform-div']}>
        <img className={css['user-avatar']} src={image} alt="User avatar" />
        <p className={css['user-name']}>{name}</p>
        <p className={css['user-tag']}>@{tag}</p>
        <p className={css['user-tag']}>{location}</p>
      </div>

      <ul className={css['user-stats-list']}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
