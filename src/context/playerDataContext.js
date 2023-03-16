import { stringify } from 'postcss';
import React, { createContext, useContext, useState } from 'react';
import emptyCivData from '../utils/emptyCivData';
import emptyPlayerData from '../utils/emptyPlayerData';
import { getNewNestedObject } from '../utils/helperFunctions';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
    const [ civData, setCivData ] = useState(emptyCivData)
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const addCivArrItem = (path, newValue) => {
        setCivData((prevState) => getNewNestedObject(prevState, path, newValue))
    }

    const removeCivArrItem = (civArrayPath, civArrayKey, itemName) => {
        let values = [...civArrayPath[civArrayKey]]
        values = values.filter(item => item.name !== itemName)
        setCivData((prevState) => {
            let newCivData = {...prevState}
            console.log(newCivData, "holisss")
            civArrayPath[civArrayKey] = values
            console.log(newCivData, "holi")
            return newCivData
        })
      }

    const addAdvancement = (name, dsc, type) => {
        setCivData((prevState) => getNewNestedObject(
            prevState, 
            ["knowledge", type, "advancements"], 
            {'name': name, 'dsc': dsc} 
        ))
}

    const deleteAdvancement = (name, type) => {
        removeCivArrItem(civData.knowledge[type], "advancements", name)

      }
      

    const value = {
        civData,
        setCivData,
        playerData, 
        setPlayerData,
        addAdvancement,
        deleteAdvancement,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const usePlayerDataContext = () => useContext(Context)