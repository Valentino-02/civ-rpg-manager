import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { useAuth } from '../context/AuthContext'
import { useStateContext } from '../context'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Header() {
    const [openModal, setOpenModal] = useState(false)
    const { user } = useAuth()
    const { playerData } = useStateContext()

    const handleSave = () => {
        savePlayerData(user.uid)
    }

    async function savePlayerData(uid) {
        const playerRef = doc(db, 'players', uid)
        await setDoc(playerRef, {
            ...playerData,
        }, { merge: true })
    } 


    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>Civ RPG Manager</h1>
                <i onClick={() => handleSave()} className="fa-solid fa-floppy-disk cursor-pointer text-xl duration-200 hover:text-cyan-300 ml-80"></i>
                {user && 

                    <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl">{' '+ playerData.playerName}</i>

                }
            </div>
        </>
    )
}