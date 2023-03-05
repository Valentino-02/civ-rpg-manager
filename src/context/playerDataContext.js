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