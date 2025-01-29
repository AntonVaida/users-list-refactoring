import { useMemo } from "react"
import { User } from "../../types"

export const useUserList = ({ users } : { users: User[] }) => {
  
  const userCount = useMemo(() => {
    return users?.length
  }, [users?.length]);

  return {
    userCount
  }
}