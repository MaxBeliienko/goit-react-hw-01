import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
