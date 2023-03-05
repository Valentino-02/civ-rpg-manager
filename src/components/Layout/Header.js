import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useStateContext } from '../../context';
import { db } from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const { user } = useAuth();
  const { playerData } = useStateContext();

  const handleSave = () => {
    savePlayerData(user.uid);
  };

  async function savePlayerData(uid) {
    const playerRef = doc(db, 'players', uid);
    await setDoc(playerRef, {
      ...playerData,
    }, { merge: true }).then(() => toast('holi')).catch(() => toast('puto'));
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
      <ToastContainer />
    </>
  );
}

