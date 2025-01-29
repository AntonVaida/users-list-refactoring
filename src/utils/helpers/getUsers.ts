import { User } from "../classes"

export const getUsers = ({userNameList}: {userNameList: string[]}) => {
  if (!userNameList?.length) return [];

  return userNameList.map((userName) => new User(userName))
}