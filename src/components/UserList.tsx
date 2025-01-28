import { useEffect, useState } from 'react';
import User from '../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
  userCount: number,
  setUsers: (value: User[]) => void,
  setSelectedUser: (value: User | null) => void,
}

export default function UserList({
  userCount,
  setUsers,
  setSelectedUser,
}: UserListProps) {
  const [user, setUser] = useState<User | null>(globalThis.globalSelectedUser);
  const [currentUsers, setCurrentUsers] = useState<User[]>(globalThis.globalUsers);

  useEffect(() => {
    setCurrentUsers(globalThis.globalUsers);
  }, [userCount]);

  useEffect(() => {
    if (user) {
      document.title = `User: ${user.name}`;
    }
  }, [user]);

  const deleteUser = (id: string) => {
    const updatedUsers = currentUsers.filter((user) => user.id !== id);
    if (user !== null && id === user.id) {
      setSelectedUser(null);
      globalThis.globalSelectedUser = null;
      setUser(null);
    }
    setUsers(updatedUsers);
  };

  const handleSelectUser = (user: User) => {
    setUser(user);
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List ({userCount})</h2>
      <ul>
        {currentUsers.map((user, index) => <UserListItem key={index} user={user} setSelectedUser={handleSelectUser} deleteUser={deleteUser} />)}
      </ul>
      {user && (
        <div>
          <h3>Selected User</h3>
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  );
}
