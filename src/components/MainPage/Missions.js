import React, { useState } from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'
import ProgressBar from '../GeneralUse/ProgressBars/ProgressBar'




const MissionBar = ({ name, points, maxPoints, handleDeleteMission, handleMissionProgress}) => {

    return(
        <div className='flex items-stretch gap-2'>
        <ProgressBar label={name} value={points} maxValue={maxPoints} />
        <AddSubtractBtn handleAddPoints={(value) => handleMissionProgress(name, value, 'add')} handleSubtractPoints={(value) => handleMissionProgress(name, value, 'subtract')}/>
        <i onClick={() => handleDeleteMission(name)} className="pt-3 pl-2 text-xl duration-200 cursor-pointer fa-solid fa-trash hover:text-rose-500"></i> 
    </div>

    )
}


const MissionInput = ({ handleAddMission }) => {
    const [name,setName] = useState('')
    const [points,setPoints] = useState('')

    const handleNameChange = (value) => {
        if (value.length >= 30) {return}
        setName(value)
    }

    const handlePointsChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setPoints(value)
    }

    const handleAddAdvancementClick = () => {
        if (name === '' || points === '') {return}
        handleAddMission(name, points)
        setName('')
        setPoints('')
    }

    return(
        <div className='flex items-stretch mb-5 divide-x'>
            <input type='text' placeholder={'Enter Mission Name'} value={name} onChange={(e) => handleNameChange(e.target.value)} className="flex-1 p-3 text-base text-white outline-none sm:text-lg bg-slate-700" />
            <input type='text' placeholder={'Enter Time / Mission Points'} value={points} onChange={(e) => handlePointsChange(e.target.value)} className="flex-1 p-3 text-base text-white outline-none sm:text-lg bg-slate-700" />
            <button onClick={() => handleAddAdvancementClick()} className='px-4 py-2 text-base font-medium text-white duration-300 w-fit sm:px-6 sm:py-3 bg-slate-400 hover:opacity-40'>ADD</button>
        </div>
    )
}
 

const Missions = () => {
    const { playerData, addMission, deleteMission, setMissionProgress } = usePlayerDataContext()
    
    const missions = playerData.missions ? playerData.missions : []

    return (<>
        <MissionInput handleAddMission={(name, maxPoints) => addMission(name, maxPoints)} />
        {missions.length !== 0 ? missions.map((mission, index) => (
            <MissionBar key={index} name={mission.name} points={mission.points} maxPoints={mission.maxPoints} handleDeleteMission={(name) => deleteMission(name)} handleMissionProgress={(name, value, operation) => setMissionProgress(name, value, operation)} />
        )) : null} 
  </>)
}

export default Missions