import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}
export function useUpdateUser() {
  return useContext(UpdateUserContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
