
import { setDoc, getDoc } from "firebase/firestore";
import { getPlayerRef } from "../utils/DBRefs";
import emptyPlayerData from "../utils/emptyPlayerData";


export const createPlayer = async (userId) => {
    await setDoc(getPlayerRef(userId), {
      ...emptyPlayerData,
    }, { merge: true });
}

export const getPlayerData = async (userId) => {
    const playerDoc = await getDoc(getPlayerRef(userId));
    return playerDoc.data()
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