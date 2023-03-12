import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { usePlayerDataContext } from '../context/playerDataContext';
import { getPlayerData } from '../actions/playerActions';

export default function useFetchPlayerData() {
  const { setPlayerData } = usePlayerDataContext();

  const { user } = useAuth();

  useEffect(async() => {
    let playerData = await getPlayerData(user.uid);
    setPlayerData(playerData)
  }, []);
}

