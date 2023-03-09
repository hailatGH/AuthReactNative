import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
