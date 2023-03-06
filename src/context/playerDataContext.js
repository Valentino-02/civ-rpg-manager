import React, { createContext, useContext, useState } from 'react';
import emptyPlayerData from '../utils/emptyPlayerData';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
    const [ playerData, setPlayerData ] = useState(emptyPlayerData)

    const addPlayerValue = (propertyName, propertyValue) => {
        let values = [...playerData[propertyName]]
        values.push(propertyValue)
        setPlayerData((prevState) => ({
            ...prevState,
            [propertyName]: values
        }))
    }
    
    const removePlayerValue = (propertyName, name) => {
        let values = [...playerData[propertyName]]
        values = values.filter(item => item.name !== name)
        setPlayerData((prevState) => ({
            ...prevState,
            [propertyName]: values
        }))
    }
    
    const changePlayerValue = (propertyName, name, newValue) => {
        let playerPropertyValues = [...playerData[propertyName]]
        let index = playerPropertyValues.findIndex((item) => item.name === name)
        playerPropertyValues[index] = newValue
        setPlayerData((prevState) => ({
            ...prevState,
            [propertyName]: playerPropertyValues
        }))
    }

    const addLabour = (name) => {
        addPlayerValue('extraLabourDistributions', {'name': name, 'value': 0})
    }

    const removeLabour = (name) => {
        removePlayerValue('extraLabourDistributions', name)
    }

    const setLabourValue = (name, value, isExtra) => {
        if (isExtra) {
        changePlayerValue('extraLabourDistributions', name, {'name': name, 'value': value})
        } else {
        changePlayerValue('labourDistributions', name, {'name': name, 'value': value})
        }
    }

    const addAdvancement = (name, dsc, type) => {
        addPlayerValue(type, {'name': name, 'dsc': dsc})
    }

    const deleteAdvancement = (name, type) => {
        removePlayerValue(type, name)
    }

    const setProgressValue = (name, strValue, operation='') => {
        let value = Number(strValue)
        if (operation === 'add') {
            let progressBars = {...playerData.progressBars}
            let prevValue = progressBars[name]
            progressBars[name]= value + prevValue
            setPlayerData((prevState) => ({
                ...prevState,
                progressBars: progressBars
            }))
            return
        }
        if (operation === 'subtract') {
            let progressBars = {...playerData.progressBars}
            let prevValue = progressBars[name]
            progressBars[name]= prevValue - value
            setPlayerData((prevState) => ({
                ...prevState,
                progressBars: progressBars
            }))
            return
        }
        let progressBars = {...playerData.progressBars}
        progressBars[name]= value
        setPlayerData((prevState) => ({
            ...prevState,
            progressBars: progressBars
        }))
    }


    const addMission = (name, maxPoints) => {
        addPlayerValue('missions', {'name': name, 'maxPoints': maxPoints, 'points': 0})
    }

    const deleteMission = (name) => {
        removePlayerValue('missions', name)
    }

    const setMissionProgress = (name, strPoints, operation='') => {
        let points = Number(strPoints)
        let missions = [...playerData.missions]
        let index = missions.findIndex(mission => mission.name === name)
        let mission = missions[index]
        let prePoints = mission.points
        if (operation === 'add') {
            mission.points = points + prePoints
        }
        if (operation === 'subtract') {
            mission.points = prePoints - points
        }
        missions[index] = mission
        setPlayerData((prevState) => ({
            ...prevState,
            missions: missions
        }))
    }

    const addResource = (name, dsc) => {
        addPlayerValue('resources', {'name': name, 'dsc': dsc})
    }

    const deleteResource = (name) => {
        removePlayerValue('resources', name)
    }

    const setFoodProgress = (strPoints, operation='') => {
        let points = Number(strPoints)
        let food = playerData.extraFood
        if (operation === 'add') {
            food = food + points
        }
        if (operation === 'subtract') {
            food = food - points
        }
        setPlayerData((prevState) => ({
            ...prevState,
            extraFood: food
        }))
    }

    const setPopulationProgress = (strPoints, operation='') => {
        let points = Number(strPoints)
        let population = playerData.populationSize
        if (operation === 'add') {
           population = population + points
        }
        if (operation === 'subtract') {
            population = population - points
        }
        setPlayerData((prevState) => ({
            ...prevState,
            populationSize: population
        }))
    }

    const addText = (name, dsc) => {
        addPlayerValue('extraNotes', {'name': name, 'dsc': dsc})
    }

    const deleteText = (name) => {
        removePlayerValue('extraNotes', name)
    }

 
    const value = {
        playerData,
        setPlayerData,
        setLabourValue,
        addLabour,
        removeLabour,
        addAdvancement,
        deleteAdvancement,
        setProgressValue,
        addMission,
        deleteMission,
        setMissionProgress,
        addResource,
        deleteResource,
        setFoodProgress,
        setPopulationProgress,
        addText,
        deleteText,
      }

    return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
    )
}

export const usePlayerDataContext = () => useContext(Context)