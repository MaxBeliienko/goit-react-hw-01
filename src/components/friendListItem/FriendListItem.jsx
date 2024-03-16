import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css['friend-list-item-div']}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={css[isOnline ? 'friend-online' : 'friend-offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
