import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const UserContext = createContext();
const IsFetchingUserContext = createContext();
const UserUpdateContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function useIsFetchingUser() {
  return useContext(IsFetchingUserContext);
}

// TODO: delete if unnecessary
function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserProvider({ children }) {
  const [currUser, setCurrUser] = useState(null);
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setCurrUser(user);
        } else {
          setCurrUser(null);
        }

        setIsFetchingUser(false);
      },
      []
    );

    return () => unsubscribe();
  });

  return (
    <UserContext.Provider value={currUser}>
      <UserUpdateContext.Provider value={setCurrUser}>
        <IsFetchingUserContext.Provider value={isFetchingUser}>
          {children}
        </IsFetchingUserContext.Provider>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, useUser, useUserUpdate, useIsFetchingUser };
