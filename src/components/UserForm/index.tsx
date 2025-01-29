import { useUserForm, UserFormProps } from './useUserForm';

export default function UserForm({ addUser } : UserFormProps) {
  const {
    name,
    setName,
    handleSubmit
  } = useUserForm({ addUser })

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}