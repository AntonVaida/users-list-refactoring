import { User } from "../../types"

interface UserListItemProps {
  user: User,
  selectedUser: User | null, 
  setSelectedUser: (user: User) => void,
  deleteUser: (id: string) => void,
}

export default function UserListItem({
  user,
  selectedUser,
  setSelectedUser,
  deleteUser,
}: UserListItemProps) {

  return (
    <li key={user.id}>
      {selectedUser?.id === user.id 
        ? <button style={{ fontWeight: 600, borderColor: '#0000aa' }} disabled>{user.name}</button> 
        : <button onClick={() => setSelectedUser(user)}>{user.name}</button>}
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
}
