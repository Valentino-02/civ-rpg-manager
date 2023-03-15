import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../context/authContext';
import { usePlayerDataContext } from '../../context/playerDataContext';
import { auth, db } from '../../../firebase';
import showMessage from '../../utils/showMessage';
import { signOut } from '@firebase/auth';


export default function Header() {
  const { user } = useAuth();
  const { civData } = usePlayerDataContext();

  const rulerName = civData.civInfo.rulerName
  const civName = civData.civInfo.civName

  const handleSave = () => {
    savePlayerData(user.uid);
  };

  async function savePlayerData(uid) {
    const playerRef = doc(db, 'players', uid);
    await setDoc(playerRef, {
      ...playerData,
    }, { merge: true }).then(() => showMessage('Guardaste tus huevadas')).catch(() => showMessage('Rompiste'));
  }

  return (
    <>
      <div className="fixed sticky top-0 left-0 grid items-center w-full grid-cols-5 p-1 border-b border-white border-solid bg-inherit justify-items-center">
        <h1 className="text-2xl select-none sm:text-3xl">Civ RPG Manager</h1>
        {user &&
        <>
          <div className="flex flex-col items-center justify-center col-span-3 col-start-2 gap-2 my-2 text-xs sm:text-sm sm:gap-4">
            <h1 className="text-2xl font-extrabold select-none sm:text-4xl">{`Welcome ${rulerName}`}</h1>
            <h1 className="font-extrabold select-none text-1xl sm:text-3xl">{`Great leader of ${civName}`}</h1>
          </div>
          <div className="grid items-center grid-cols-2 col-start-5 gap-8 mr-4">
            <i onClick={() => handleSave()} className="text-xl transition duration-500 cursor-pointer fa-solid fa-floppy-disk hover:text-cyan-300 sm:text-3xl" />
            <i onClick={() => signOut(auth)} className="text-xl transition duration-500 cursor-pointer fa-solid fa-right-from-bracket hover:text-cyan-300 sm:text-3xl" />
          </div>
        </>}
      </div>
    </>
  );
}

