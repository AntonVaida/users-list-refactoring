import { useState, FormEvent} from "react";
import { User } from "../../utils";
import { User as UserInterface } from "../../types";

export interface UserFormProps {
  addUser: (user: UserInterface) => void,
}

export const useUserForm = ({ 
  addUser 
} : UserFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser(new User(name));
    setName("");
  };

  return {
    name,
    setName,
    handleSubmit
  }
}