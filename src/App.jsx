import Profile from './assets/components/Profile/Profile';
import FriendList from './assets/components/FriendList/FriendList'
import TransactionHistory from './assets/components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></Profile>

      <FriendList friends={friends} ></FriendList>
      <TransactionHistory items={transactions} ></TransactionHistory>
    </>
  );
}

export default App;
