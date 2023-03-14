import { collection, doc } from "firebase/firestore";
import { db } from '../../firebase';

export const civCollRef = collection(db, 'civilizations');

export const getPlayerRef = (userId) => doc(db, 'players', userId)

export const getCivRef = (civId) => doc(db, 'civilizations', civId)