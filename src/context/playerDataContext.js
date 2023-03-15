import React, { createContext, useContext, useState } from 'react';
import emptyCivData from '../utils/emptyCivData';
import emptyPlayerData from '../utils/emptyPlayerData';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
    const [ civData, setCivData ] = useState(emptyCivData)
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const addCivArrItem = (civArrayPath, civArrayKey, itemValue) => {
        let values = [...civArrayPath[civArrayKey]]
        values.push(itemValue)
        setCivData((prevState) => {
            let newCivData = {...prevState}
            civArrayPath[civArrayKey] = values
            return newCivData
        })
    }

    const addAdvancement = (name, dsc, type) => {
        addCivArrItem(civData.knowledge[type], "advancements", {'name': name, 'dsc': dsc})
    }

    const value = {
        civData,
        setCivData,
        playerData, 
        setPlayerData,
        addAdvancement,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const usePlayerDataContext = () => useContext(Context)