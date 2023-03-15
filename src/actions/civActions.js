
import { addDoc, setDoc, getDoc } from "firebase/firestore";
import { civCollRef, getCivRef, getPlayerRef } from "../utils/DBRefs";
import emptyCivData from "../utils/emptyCivData"; 
import emptyPlayerData from "../utils/emptyPlayerData";

export const addCivArrItem = (civArrayPath, civArrayKey, itemValue) => {
    let values = [...civArrayPath[civArrayKey]]
    values.push(itemValue)
    setCivData((prevState) => {
        let oldCivData = {...prevState}
        civArrayPath[civArrayKey] = values
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
    setCivData((prevState) => ({
        ...prevState,
        civArrayKey: modifiedArray
    }))
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
    let progressValue = [...civDataValue[progress]]
    let newValue = progressValue + delta
    setPlayerData((prevState) => ({
        ...prevState,
        progress: newValue
    }))
}


