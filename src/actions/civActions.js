
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
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
    const newList = [...civList]
    const newCiv = {
        civName: civName,
        civId: civId
    }
    newList.push(newCiv)

    await setDoc(playerRef, {
        ...emptyPlayerData,
        civList: newList
    }, {merge: true})
}