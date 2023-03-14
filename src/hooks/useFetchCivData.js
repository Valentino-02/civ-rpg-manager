import { useEffect } from 'react';
import { usePlayerDataContext } from '../context/playerDataContext';
import { getCivData } from '../actions/civActions';
import { findCurrentCivId } from '../utils/helperFunctions';

export default function useFetchCivData() {
  const { setCivData, playerData } = usePlayerDataContext();

  useEffect(() => {
    if (playerData.civList.length === 0) return
    let currentCivId = findCurrentCivId(playerData.civList)
    getAndSetData(currentCivId)
  }, [playerData.civList]);

  const getAndSetData = async(civId) => {
    let civData = await getCivData(civId);
    setCivData(civData)
  }
}
