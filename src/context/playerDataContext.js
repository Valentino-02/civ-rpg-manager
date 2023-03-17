import React, { createContext, useContext, useState } from 'react';
import emptyCivData from '../utils/emptyCivData';
import emptyPlayerData from '../utils/emptyPlayerData';
import { getObjectProperty, getUpdatedObject } from '../utils/helperFunctions';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
    const [ civData, setCivData ] = useState(emptyCivData)
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const pushCivProp = (path, newValue) => {
        let oldArray = getObjectProperty(civData, path)
        oldArray.push(newValue)
        let newState = getUpdatedObject(civData, path, oldArray)
        setCivData(newState)
    }

    const filterCivProp = (path, id, idLabel='name') => {
    let oldArray = getObjectProperty(civData, path)
    let oldArray2 = oldArray.filter((element) => element[idLabel] !== id)
    let newState = getUpdatedObject(civData, path, oldArray2)
    setCivData(newState)
    }

    const setCivProp = (path, newValue) => setCivData(getUpdatedObject(civData, path, newValue))
    
    const getCivProp = (path) => getObjectProperty(civData, path)
    
    const value = {
        civData,
        setCivData,
        playerData, 
        setPlayerData,
        pushCivProp,
        filterCivProp,
        setCivProp,
        getCivProp,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const usePlayerDataContext = () => useContext(Context)