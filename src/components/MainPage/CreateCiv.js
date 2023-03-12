import React, { useEffect, useState } from 'react'
import { createCiv } from '../../actions/civActions'
import { usePlayerDataContext } from '../../context/playerDataContext';
import { useAuth } from '../../context/authContext';
import useFetchPlayerData, { fetchPlayerData } from '../../hooks/useFetchPlayerData';

const CreateCiv = () => {
    const { playerData, setPlayerData } = usePlayerDataContext();
    const { user } = useAuth();

    const [error, setError] = useState(null);
    const [rulerName, setRulerName] = useState('')
    const [civName, setCivName] = useState('')
    const civList = playerData.civList


    const submitHandler = async () => {
        if (!civName || !rulerName) {
        setError('Please enter all the fields');
        return;
        }
    
        await createCiv(user.uid, civName, rulerName, civList)
        fetchPlayerData(user.uid, setPlayerData )
    }

    return (
        <div className="flex flex-col items-center justify-center flex-1 gap-2 text-xs sm:text-sm sm:gap-4">
            <h1 className="text-2xl font-extrabold uppercase select-none sm:text-4xl">
                Create Civ
            </h1>

            {error && <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">{error}</div>}

            <input type="text" value={rulerName} onChange={(e) => setRulerName(e.target.value)} placeholder="Ruler Name" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />

            <input type="text" value={civName} onChange={(e) => setCivName(e.target.value)} placeholder="Civilization Name" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />

            <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
                <h2 className="relative z-20">
                    SUBMIT
                </h2>
            </button>
        </div>
    )
}

export default CreateCiv