import React, { createContext, useContext, useState } from 'react';
import emptyPlayerData from '../utils/emptyPlayerData';

const Context = createContext();

export const PlayerDataContext = ({ children }) => {
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

    const addPlayerValue = (name, propertyType) => {
        let values = [...playerData[propertyType]]
        values.push({ 'name': name, 'value': 0 })
        setPlayerData((prevState) => ({
            ...prevState,
            [propertyType]: values
        }))
    }
    
    const removePlayerValue = (name, propertyType) => {
        let values = [...playerData[propertyType]]
        values = values.filter(item => item.name !== name)
        setPlayerData((prevState) => ({
            ...prevState,
            [propertyType]: values
        }))
    }

    const addLabour = (name) => {
        addPlayerValue(name, 'extraLabourDistributions')
    }

    const removeLabour = (name) => {
        removePlayerValue(name, 'extraLabourDistributions')
    }

    const addAdvancement = (name, dsc, type) => {
                let techs = [...playerData[type]]
                techs.push({ 'name': name, 'dsc': dsc})
                setPlayerData((prevState) => ({
                    ...prevState,
                    [type]: techs
                }))
    }

    const deleteAdvancement = (name, type) => {
        removePlayerValue(name, type)
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
        let missions = [...playerData.missions]
        missions.push({ 'name': name, 'maxPoints': maxPoints, 'points': 0})
        setPlayerData((prevState) => ({
            ...prevState,
            missions: missions
        }))
    }

    const deleteMission = (name) => {
        let missions = [...playerData.missions]
        missions = missions.filter(item => item.name !== name)
        setPlayerData((prevState) => ({
            ...prevState,
            missions: missions
        }))
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
        let resources = [...playerData.resources]
        resources.push({ 'name': name, 'dsc': dsc})
        setPlayerData((prevState) => ({
            ...prevState,
            resources: resources
        }))
    }

    const deleteResource = (name) => {
        let resources = [...playerData.resources]
        resources = resources.filter(item => item.name !== name)
        setPlayerData((prevState) => ({
            ...prevState,
            resources: resources
        }))
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
        let extraNotes = [...playerData.extraNotes]
        extraNotes.push({ 'name': name, 'dsc': dsc})
        setPlayerData((prevState) => ({
            ...prevState,
            extraNotes: extraNotes
        }))
    }

    const deleteText = (name) => {
        let extraNotes = [...playerData.extraNotes]
        extraNotes = extraNotes.filter(item => item.name !== name)
        setPlayerData((prevState) => ({
            ...prevState,
            extraNotes: extraNotes
        }))
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