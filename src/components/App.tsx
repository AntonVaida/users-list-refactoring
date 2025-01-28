import { useEffect, useState } from 'react'
import UserForm from './UserForm';
import UserList from './UserList';
import User from '../types/User';
import '../App.css'

globalThis.globalUsers = [];
globalThis.globalSelectedUser = null;

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    setUsers([
      { id: crypto.randomUUID(), name: 'Frodo Baggins' },
      { id: crypto.randomUUID(), name: 'Samwise Gamgee' },
      { id: crypto.randomUUID(), name: 'Aragorn' },
      { id: crypto.randomUUID(), name: 'Legolas Greenleaf' },
      { id: crypto.randomUUID(), name: 'Gimli' },
      { id: crypto.randomUUID(), name: 'Gandalf the Grey' },
      { id: crypto.randomUUID(), name: 'Boromir' },
      { id: crypto.randomUUID(), name: 'Galadriel' },
      { id: crypto.randomUUID(), name: 'Éowyn' },
      { id: crypto.randomUUID(), name: 'Sauron' },
    ])
  }, []);

  useEffect(() => {
    globalThis.globalUsers = users;
    setUserCount(users.length);
  }, [users]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const setSelectedUser = (user: User | null) => {
    globalSelectedUser = user;
  }

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList userCount={userCount} setUsers={setUsers} setSelectedUser={setSelectedUser} />
    </div>
  );
}
