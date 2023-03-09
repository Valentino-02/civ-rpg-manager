import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../context/authContext';
import { usePlayerDataContext } from '../../context/playerDataContext';
import { auth, db } from '../../../firebase';
import showMessage from '../../utils/showMessage';
import { signOut } from '@firebase/auth';


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
    }, { merge: true }).then(() => showMessage('Guardaste tus huevadas')).catch(() => showMessage('Rompiste'));
  }

  return (
    <>
      <div className="grid fixed sticky top-0 w-full left-0 bg-inherit grid-cols-5 justify-items-center items-center p-1 border-b border-solid border-white">
        <h1 className="text-2xl select-none sm:text-3xl">Civ RPG Manager</h1>
        {user &&
        <>
          <div className="col-start-2 col-span-3 my-2 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
            <h1 className="font-extrabold select-none text-2xl sm:text-4xl">{`Welcome ${playerData.playerName}`}</h1>
            <h1 className="font-extrabold select-none text-1xl sm:text-3xl">{`Great leader of ${playerData.civName}`}</h1>
          </div>
          <div className="col-start-5 grid gap-8 grid-cols-2 items-center mr-4">
            <i onClick={() => handleSave()} className="fa-solid fa-floppy-disk cursor-pointer text-xl transition duration-500 hover:text-cyan-300 sm:text-3xl" />
            <i onClick={() => signOut(auth)} className="fa-solid fa-right-from-bracket cursor-pointer text-xl transition duration-500 hover:text-cyan-300 sm:text-3xl" />
          </div>
        </>}
      </div>
    </>
  );
}

