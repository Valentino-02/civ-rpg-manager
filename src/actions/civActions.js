
import { addDoc, setDoc, getDoc } from "firebase/firestore";
import { civCollRef, getCivRef, getPlayerRef } from "../utils/DBRefs";
import emptyCivData from "../utils/emptyCivData";
import emptyPlayerData, { emptyCivListItem } from "../utils/emptyPlayerData";

const addCivArrItem = (civArrayPath, civArrayKey, itemValue) => {
    let values = [...civArrayPath[civArrayKey]]
    values.push(itemValue)
    setCivData((prevState) => {
        let newCivData = {...prevState}
        civArrayPath[civArrayKey] = values
        return newCivData
    })
}

const removeCivArrItem = (civArrayPath, civArrayKey, itemName) => {
    let values = [...civArrayPath[civArrayKey]]
    values = values.filter(item => item.name !== itemName)
    setCivData((prevState) => {
        let oldCivData = {...prevState}
        civArrayPath[civArrayKey] = values
    })
}
 
const modifyCivArray = (civArrayKey, itemName, newItemValue) => {
    let modifiedArray = [...civArrayKey]
    let index = modifiedArray.findIndex((item) => item.name === itemName)
    modifiedArray[index] = newItemValue
    setCivData((prevState) => {
        let newCivData = {...prevState}
        civArrayKey = modifiedArray
        return newCivData
        }
    )
}

export const createCiv = async (userId, civName, rulerName, civList) => {
    const newCivInfo = {
        rulerName: rulerName,
        civName: civName
    }
    const docData = await addDoc(civCollRef, {
      ...emptyCivData,
      civInfo: newCivInfo
    });
    const civId = docData.id
    const civListWithNoCurrent = civList.map((element) => ({
        ...element,
        isCurrent:false
    }))
    const newCivList = [...civListWithNoCurrent, {...emptyCivListItem, civName, civId, isCurrent:true}]

    await setDoc(getPlayerRef(userId), {
        ...emptyPlayerData,
        civList: newCivList
    }, {merge: true})
}

export const getCivData = async (civId) => {
    const civDoc = await getDoc(getCivRef(civId))
    return civDoc.data()
}

export const setCivProgress = (civDataValue, delta) => {
    let progressValue = [...civDataValue['progress']]
    let newValue = progressValue + delta
    setPlayerData((prevState) => {
        let newCivData = {...prevState}
        progress = newValue
        return newCivData
    })
}

export const addAdvancement = (name, dsc, type) => {
    addCivArrItem(civData.knowledge[type], "advancements", {'name': name, 'dsc': dsc})
}

export const deleteAdvancement = (name, type) => {
    removeCivArrItem(civData.knowledge[type], "advancements", name)
}

