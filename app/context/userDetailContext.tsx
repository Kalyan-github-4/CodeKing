import { createContext } from "react";

export const UserDetailContext = createContext({
  userDeatail: undefined,
  setUserDetail: () => { },
})