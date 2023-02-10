import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

function Users({setUser}) {
  const [users, setUsers] = useState([])


  useEffect(() => {
    getUsers().then((usersFromAPI) => {
      setUsers(usersFromAPI)
    });
  }, []);

  return (
    <div className='Users'>
      <div>
        {users.map((user) => (
            <div className='users' key={user.name} onClick={() => setUser(user.username)}>
              <h2 key={user.name} className='userTitle'>
                {user.name}{' '}
              </h2>
                <h4>
                  {' '}
                  <img
                    key={user.created_at}
                    alt={user.created_at}
                    className='userImg'
                    src={user.avatar_url}
                  ></img>{' '}
                  
                </h4>
              <div>{user.username}</div></div>
        ))}
      </div>
    </div>
  );
}

export default Users;
