const addCivArrItem = (civArray, itemValue) => {
  let values = [...civArray]
  values.push(itemValue)
  setCivData((prevState) => {
      let newCivData = {...prevState}
      civArray = values
      return newCivData
  })
}

const removeCivArrItem = (civArray, itemName) => {
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
      progressValue = newValue
      return newCivData
  })
}

export const addAdvancement = (type, name, dsc) => {
  addCivArrItem(civData.knowledge[type]["advancements"], {'name': name, 'dsc': dsc})
}

export const deleteAdvancement = (name, type) => {
  removeCivArrItem(civData.knowledge[type]["advancements"], name)
}

export const addMission = (name, maxProgress) => {
  addCivArrItem(civData["missions"], {'name': name, 'progress': 0, 'maxProgress': maxProgress})
}

export const deleteMission = (name) => {
  removeCivArrItem(civData["missions"], name)
}

export const editMissionProgress = (name, deltaNumberValue) => {
  let missionIndex = civData.missions.findIndex((item) => item.name === name)
  civProgressChange(civData['missions'][missionIndex], deltaNumberValue)
}

export const addLabour = (name) => {
  addCivArrItem(civData["labourDistribution"], {'name': name, 'value': 0, 'isExtra': true})
}

export const addResource = (name, dsc) => {
  addCivArrItem(civData["resources"], {'name': name, 'dsc': dsc})
}
