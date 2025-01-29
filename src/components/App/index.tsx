import UserForm from '../UserForm';
import UserList from '../UserList';
import { useApp } from './useApp';
import '../../App.css'


export default function App() {
  const {    
    users,
    addUser,
    deleteUser,
    selectedUser,
    setSelectedUser
  } = useApp();

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList   
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        deleteUser={deleteUser} 
      />
    </div>
  );
}
