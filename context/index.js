import React, { createContext, useContext, useState } from 'react';
import emptyPlayerData from '../utils/emptyPlayerData';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const setLabourValue = (name, value, isExtra) => {
    if (isExtra) {
        let extraLabours = [...playerData.extraLabourDistributions]
        let index = extraLabours.findIndex((labour) => labour.name === name)
        extraLabours[index] = { 'name': name, 'value': value  }
        setPlayerData((prevState) => ({
            ...prevState,
            extraLabourDistributions: extraLabours
        }))
    } else {
        let labours = [...playerData.labourDistributions]
        let index = labours.findIndex((labour) => labour.name === name)
        labours[index] = { 'name': name, 'value': value  }
        setPlayerData((prevState) => ({
            ...prevState,
            labourDistributions: labours
        }))
    }
    }

    const addLabour = (name) => {
    let extraLabours = [...playerData.extraLabourDistributions]
    extraLabours.push({ 'name': name, 'value': 0 })
    setPlayerData((prevState) => ({
        ...prevState,
        extraLabourDistributions: extraLabours
    }))
    }

    const removeLabour = (name) => {
    let extraLabours = [...playerData.extraLabourDistributions]
    extraLabours = extraLabours.filter(item => item.name !== name)
    setPlayerData((prevState) => ({
        ...prevState,
        extraLabourDistributions: extraLabours
    }))
    }

    const addAdvancement = (name, dsc, type) => {
        switch (type) {
            case 'technology':
                let techs = [...playerData.technologies]
                techs.push({ 'name': name, 'dsc': dsc})
                setPlayerData((prevState) => ({
                    ...prevState,
                    technologies: techs
                }))
                break
            case 'belief':
                let beliefs = [...playerData.beliefs]
                beliefs.push({ 'name': name, 'dsc': dsc})
                setPlayerData((prevState) => ({
                    ...prevState,
                    beliefs: beliefs
                }))
                break
            case 'civic':
                let civics = [...playerData.civics]
                civics.push({ 'name': name, 'dsc': dsc})
                setPlayerData((prevState) => ({
                    ...prevState,
                    civics: civics
                }))
                break
        }
    }

    const deleteAdvancement = (name, type) => {
        switch (type) {
            case 'technology':
                let techs = [...playerData.technologies]
                techs = techs.filter(item => item.name !== name)
                setPlayerData((prevState) => ({
                    ...prevState,
                    technologies: techs
                }))
                break
            case 'belief':
                let beliefs = [...playerData.beliefs]
                beliefs = beliefs.filter(item => item.name !== name)
                setPlayerData((prevState) => ({
                    ...prevState,
                    beliefs: beliefs
                }))
                break
            case 'civic':
                let civics = [...playerData.civics]
                civics = civics.filter(item => item.name !== name)
                setPlayerData((prevState) => ({
                    ...prevState,
                    civics: civics
                }))
                break
        }
    }

 
    const value = {
        playerData,
        setPlayerData,
        setLabourValue,
        addLabour,
        removeLabour,
        addAdvancement,
        deleteAdvancement,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)