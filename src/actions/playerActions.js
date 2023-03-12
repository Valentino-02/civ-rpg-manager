
import { setDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';
import emptyPlayerData from "../utils/emptyPlayerData";


export const createPlayer = async (userId) => {
    const playerRef = doc(db, 'players', userId);
    await setDoc(playerRef, {
      ...emptyPlayerData,
    }, { merge: true });
}

export const getPlayerData = async (playerId) => {
    const playerRef = doc(db, 'players', userId);
    const playerDoc = await getDoc(playerRef);
    return playerDoc.data()
}