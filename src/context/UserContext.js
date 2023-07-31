import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const UserContext = createContext();
const UserUpdateContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserProvider({ children }) {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setCurrUser(user);
        } else {
          setCurrUser(null);
        }
      },
      []
    );

    return () => unsubscribe();
  });

  return (
    <UserContext.Provider value={currUser}>
      <UserUpdateContext.Provider value={setCurrUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, useUser, useUserUpdate };
