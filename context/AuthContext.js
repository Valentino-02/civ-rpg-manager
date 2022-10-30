import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        user,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}