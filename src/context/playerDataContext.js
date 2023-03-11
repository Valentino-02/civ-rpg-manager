import React, { createContext, useContext, useState } from 'react';
import emptyCivData from '../utils/emptyCivData';
import emptyPlayerData from '../utils/emptyPlayerData';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
    const [ civData, setCivData ] = useState(emptyCivData)
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const value = {
        civData,
        setCivData,
        playerData, 
        setPlayerData,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const usePlayerDataContext = () => useContext(Context)