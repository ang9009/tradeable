import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, doc, getDoc, setDoc, updateDoc } from "../lib/firebase";

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

  // If user object doesn't exist (after verify), fetch it again until it exists
  function getUserObject(userId) {
    if (!userId) {
      return;
    }

    console.log("Getting user object");
    const userRef = doc(db, "users", userId);

    getDoc(userRef).then((res) => {
      if (!res.exists()) {
        const userRef = doc(db, "users", userId);
        const name = currUserData.email.split("@")[0];
        const user = {
          name: name,
          email: currUserData.email,
          id: userId,
          isVerified: false,
          photoUrl: "",
          reviews: 0,
          avgRating: 0,
          about: "Hey there, I'm new to tradeable!",
        };

        setDoc(doc(db, "userChats", userId), {});
        setDoc(userRef, user);

        getUserObject();
        return;
      } else {
        setCurrUser(res.data());

        // If user verified not updated, update it here
        // !Check if this works with Alan
        if (currUserData?.emailVerified && !res.data().isVerified) {
          console.log("Updating verified");
          const userRef = doc(db, "users", res.data().id);
          updateDoc(userRef, {
            isVerified: true,
          }).then(() => {
            window.location.reload();
          });
        }
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setCurrUserData(user);
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

  useEffect(() => {
    if (currUserData && Object.hasOwn(currUserData, "uid")) {
      getUserObject(currUserData.uid);
    }
  }, [currUserData]);

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
