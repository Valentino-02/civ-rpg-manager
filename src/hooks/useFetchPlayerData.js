import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/authContext';
import { db } from '../../firebase';
import emptyPlayerData from '../utils/emptyPlayerData';
import { usePlayerDataContext } from '../context/playerDataContext';

export default function useFetchPlayerData() {
  const { playerData, setPlayerData } = usePlayerDataContext();

  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const playerRef = doc(db, 'players', user.uid);
      const playerDoc = await getDoc(playerRef);
      if (playerDoc.exists()) {
        setPlayerData(playerDoc.data());
      } else {
        setPlayerData({ emptyPlayerData });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return { playerData };
}
