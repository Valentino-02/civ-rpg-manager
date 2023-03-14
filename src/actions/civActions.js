
import { addDoc, setDoc, getDoc } from "firebase/firestore";
import { civCollRef, getCivRef, getPlayerRef } from "../utils/DBRefs";
import emptyCivData from "../utils/emptyCivData"; 
import emptyPlayerData, { emptyCivListItem } from "../utils/emptyPlayerData";


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

export const setCivAsCurrent = async(userId, civId, civList) => {
    const newCivList = civList.map((element) => (element.civId === civId ? {
        ...element,
        isCurrent: true
    } : {
        ...element,
        isCurrent: false
    }))
    await setDoc(getPlayerRef(userId), {
        ...emptyPlayerData,
        civList: newCivList
    }, {merge: true})
}
