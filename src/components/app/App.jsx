import './App.css';
import userData from '../../data/userData.json';
import Profile from '../profile/Profile';
import friends from '../../data/friends.json';
import FriendList from '../friendList/FriendList';
import transactions from '../../data/transactions.json';
import TransactionHistory from '../transactionHistory/TransactionHistory';

function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
