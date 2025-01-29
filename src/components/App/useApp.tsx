import { useState } from 'react'
import { User } from '../../types';
import { getUsers } from '../../utils';

const USER_NAME_LIST = [
  "Frodo Baggins",
  "Samwise Gamgee",
  "Aragorn",
  "Legolas Greenleaf",
  "Gimli",
  "Gandalf the Grey",
  "Boromir",
  "Galadriel",
  "Éowyn",
  "Sauron"
]

export const useApp = () => {
  const [users, setUsers] = useState<User[]>(getUsers({userNameList: USER_NAME_LIST}));
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const addUser = (user: User) => {
    setUsers(usersList => [...usersList, user]);
  };

  const deleteUser = (id: string) => {
    setSelectedUser(null);
    setUsers(users => users.filter((user) => user.id !== id));
  };

  return {
    users,
    addUser,
    deleteUser,
    selectedUser,
    setSelectedUser
  }
}