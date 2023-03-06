import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../context/authContext';
import { usePlayerDataContext } from '../../context/playerDataContext';
import { db } from '../../../firebase';
import showMessage from '../../utils/showMessage';


export default function Header() {
  const { user } = useAuth();
  const { playerData } = usePlayerDataContext();

  const handleSave = () => {
    savePlayerData(user.uid);
  };

  async function savePlayerData(uid) {
    const playerRef = doc(db, 'players', uid);
    await setDoc(playerRef, {
      ...playerData,
    }, { merge: true }).then(() => showMessage('holi')).catch(() => showMessage('puto'));
  }

  return (
    <>
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-3xl select-none sm:text-6xl">Civ RPG Manager</h1>
        {user &&
        <div className="grid gap-8 grid-cols-2 items-center mr-8">
          <i onClick={() => handleSave()} className="fa-solid fa-floppy-disk cursor-pointer text-xl transition duration-500 hover:text-cyan-300 sm:text-3xl" />
        </div>}
      </div>
    </>
  );
}

