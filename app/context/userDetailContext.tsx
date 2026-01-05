import { createContext } from "react";

interface UserDetailType {
  id: string;
  email: string;
  name: string;
}

interface UserDetailContextType {
  userDetail: UserDetailType | null;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetailType | null>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: null,
  setUserDetail: () => {},
})