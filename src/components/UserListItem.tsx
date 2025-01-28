import User from '../types/User';

interface UserListItemProps {
  user: User,
  setSelectedUser: (user: User) => void,
  deleteUser: (id: string) => void,
}

export default function UserListItem({
  user,
  setSelectedUser,
  deleteUser,
}: UserListItemProps) {
  return (
    <li key={user.id}>
      {globalThis.globalSelectedUser?.id === user.id ? <button style={{ fontWeight: 600, borderColor: '#0000aa' }} disabled>{user.name}</button> : <button onClick={() => setSelectedUser(user)}>{user.name}</button>}
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
}
