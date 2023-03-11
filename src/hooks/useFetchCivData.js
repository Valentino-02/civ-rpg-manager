import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import emptyCivData from '../utils/emptyCivData';
import { usePlayerDataContext } from '../context/playerDataContext';

export default function useFetchCivData() {
  const { civData, setCivData } = usePlayerDataContext();

  const civUid = ''

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const civRef = doc(db, 'civilizations', civUid);
      const civDoc = await getDoc(civRef);
      if (civDoc.exists()) {
        setCivData(civDoc.data());
      } else {
        setCivData({ emptyCivData });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return { civData };
}
