
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import emptyCivData from "../utils/emptyCivData"; 
import emptyPlayerData from "../utils/emptyPlayerData";


export const createCiv = async (userId, civName, rulerName, civList) => {
    const civCollRef = collection(db, 'civilizations');
    const playerRef = doc(db, 'players', userId)
    
    const newCivInfo = {
        rulerName: rulerName,
        civName: civName
    }
    const docData = await addDoc(civCollRef, {
      ...emptyCivData,
      civInfo: newCivInfo
    });
    const civId = docData.id
    const newCivList = [...civList, {civName, civId}]

    await setDoc(playerRef, {
        ...emptyPlayerData,
        civList: newCivList
    }, {merge: true})
}

export const getCivData = async (civId) => {
    const civRef = doc(db, 'civilizations', civId);
    const civDoc = await getDoc(civRef)
    return civDoc.data()
}