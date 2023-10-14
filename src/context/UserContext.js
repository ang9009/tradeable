import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, doc, getDoc } from "../lib/firebase";

const UserContext = createContext();
const UserDataContext = createContext();
const IsFetchingUserContext = createContext();
const UserUpdateContext = createContext();

function useUser() {
  return {
    userData: useContext(UserDataContext),
    user: useContext(UserContext),
    isFetchingUser: useContext(IsFetchingUserContext),
  };
}

function UserProvider({ children }) {
  const [currUser, setCurrUser] = useState(null);
  const [currUserData, setCurrUserData] = useState(null);
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setCurrUserData(user);

          const userRef = doc(db, "users", user.uid);
          getDoc(userRef).then((res) => {
            setCurrUser(res.data());
          });
        } else {
          setCurrUser(null);
          setCurrUserData(null);
        }

        setIsFetchingUser(false);
      },
      []
    );

    return () => unsubscribe();
  }, []);

  return (
    <UserDataContext.Provider value={currUserData}>
      <UserContext.Provider value={currUser}>
        <IsFetchingUserContext.Provider value={isFetchingUser}>
          {children}
        </IsFetchingUserContext.Provider>
      </UserContext.Provider>
    </UserDataContext.Provider>
  );
}

export { UserProvider, useUser };
