import React, { useContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';

const Context = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const { user } = userCred;
        const userId = user.uid;
        return userId;
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
  };

  return (
    <Context.Provider value={value}>
      {!loading && children}
    </Context.Provider>
  );
}

export const useAuth = () => useContext(Context)
