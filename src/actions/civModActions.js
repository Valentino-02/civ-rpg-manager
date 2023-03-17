import React from "react"
import { getObjectProperty, getUpdatedObject } from "../utils/helperFunctions"

const addCivArrItem = (path, newValue) => {
  setCivData((prevState) => {
    let oldArray = getObjectProperty(prevState, path)
    oldArray.push(newValue)
    let newState = getUpdatedObject(prevState, path, oldArray)
    return newState
  })
}

const removeCivArrItem = (civArray, itemName, setCivData) => {
  let values = [...civArray]
  values = values.filter(item => item.name !== itemName)
  setCivData((prevState) => {
      let newCivData = {...prevState}
      civArray = values
      return newCivData
  })
}

const modifyCivArrayItem = (civArray, itemName, newItemValue) => {
  let modifiedArray = [...civArray]
  let index = modifiedArray.findIndex((item) => item.name === itemName)
  modifiedArray[index] = newItemValue
  setCivData((prevState) => {
      let newCivData = {...prevState}
      civArray = modifiedArray
      return newCivData
      }
  )
}

export const civProgressChange = (civProgressValue, deltaNumberValue) => {
  let progressValue = {...civProgressValue}
  let newValue = progressValue + deltaNumberValue
  setPlayerData((prevState) => {
      let newCivData = {...prevState}
      civProgressValue = newValue
      return newCivData
  })
}

export const addAdvancement = (type, name, dsc) => {
  addCivArrItem(civData.knowledge[type]["advancements"], {'name': name, 'dsc': dsc})
}

export const deleteAdvancement = (name, type) => {
  removeCivArrItem(civData.knowledge[type]["advancements"], name)
}

export const setAdvancementProgress = (type, deltaNumberValue) => {
  civProgressChange(civData['knowledge'][type]['progress'], deltaNumberValue)
}

export const addMission = (name, maxProgress) => {
  addCivArrItem(civData["missions"], {'name': name, 'progress': 0, 'maxProgress': maxProgress})
}

export const deleteMission = (name) => {
  removeCivArrItem(civData["missions"], name)
}

export const setMissionProgress = (name, deltaNumberValue) => {
  let missionIndex = civData.missions.findIndex((mission) => mission.name === name)
  civProgressChange(civData['missions'][missionIndex]['progress'], deltaNumberValue)
}

export const addLabour = (name) => {
  addCivArrItem(civData["labourDistribution"], {'name': name, 'value': 0, 'isExtra': true})
}

export const deleteLabour = (name) => {
  removeCivArrItem(civData["labourDistribution"], name)
}

export const setLabourValue = (name, newValue) => {
  let modifiedArray = [...civData.labourDistribution]
  let index = modifiedArray.findIndex((item) => item.name === itemName)
  let extraValue = modifiedArray[index].isExtra
  modifyCivArrayItem(civData.labourDistribution, name, {'name': name, 'value': newValue, 'isExtra': extraValue})
}

export const addResource = (name, dsc) => {
  addCivArrItem(civData["resources"], {'name': name, 'dsc': dsc})
}

export const deleteResource = (name) => {
  removeCivArrItem(civData["resources"], name)
}

export const setPopProgress = (deltaNumberValue) => {
  civProgressChange(civData.populationGrowth['progress'], deltaNumberValue)
}

export const setPopLvl = (deltaNumberValue) => {
  civProgressChange(civData.populationGrowth['populationSize'], deltaNumberValue)
}



