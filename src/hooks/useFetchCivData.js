import { useEffect } from 'react';
import { usePlayerDataContext } from '../context/playerDataContext';
import { getCivData } from '../actions/civActions';

export default function useFetchCivData(civId) {
  const { setCivData } = usePlayerDataContext();

  useEffect(async() => {
    let civData = await getCivData(civId);
    setCivData(civData)
  }, []);
}
