import { User } from '../../types';
import UserListItem from '../UserListItem';
import { useUserList } from './useUserList';

interface UserListProps {
  users: User[],
  selectedUser: User | null,
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>,
  deleteUser: (id: string) => void
}

export default function UserList({
  users,
  selectedUser,
  setSelectedUser,
  deleteUser,
}: UserListProps) {
  const { userCount } = useUserList({ users });

  return (
    <div>
      <h2>User List ({userCount})</h2>
      <ul>
        {users.map((user, index) => (
          <UserListItem 
            key={index} 
            user={user} 
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3>Selected User</h3>
          <p>Name: {selectedUser.name}</p>
        </div>
      )}
    </div>
  );
}
