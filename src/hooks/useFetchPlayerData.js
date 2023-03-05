import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../../firebase';
import emptyPlayerData from '../utils/emptyPlayerData';
import { useStateContext } from '../context';

export default function useFetchPlayerData() {
  const { playerData, setPlayerData } = useStateContext();

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
