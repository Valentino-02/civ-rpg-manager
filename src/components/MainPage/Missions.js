import React, { useState } from 'react'
import { useStateContext } from '../../context'
import ProgressBar from '../GeneralUse/ProgressBar'


const AddSubtractBtn = ({ handleAddPoints, handleSubtractPoints }) => {
    const [points,setpoints] = useState('')

    const handlepointsChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setpoints(value)
    }

    const handleClickAddPoints = () => {
        if (points !== '') {
            handleAddPoints(points)
            setpoints('') 
            return
        }
        handleAddPoints('1')
        setpoints('')   

    }

    const handleClickSubtractPoints = () => {
        if (points !== '') {
            handleSubtractPoints(points)
            setpoints('')
            return
        }
        handleSubtractPoints('1')
        setpoints('')

    }
    
    return(
        <div className='p-2 flex-2  '>
            <input type="text" value={points} onChange={(e) => handlepointsChange(e.target.value)} placeholder={'0'} className='bg-slate-700 text-white p-2 max-w-[4ch]' />
            <i onClick={() => handleClickAddPoints()} className="fa-solid fa-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
            <i onClick={() => handleClickSubtractPoints()} className="fa-solid fa-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
}


const MissionBar = ({ name, points, maxPoints, handleDeleteMission, handleMissionProgress}) => {

    return(
        <div className='flex items-stretch gap-2'>
        <ProgressBar label={name} value={points} maxValue={maxPoints} />
        <AddSubtractBtn handleAddPoints={(value) => handleMissionProgress(name, value, 'add')} handleSubtractPoints={(value) => handleMissionProgress(name, value, 'subtract')}/>
        <i onClick={() => handleDeleteMission(name)} className="fa-solid fa-trash pt-3 pl-2 cursor-pointer text-xl duration-200 hover:text-rose-500"></i> 
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
        <div className='flex items-stretch divide-x mb-5'>
            <input type='text' placeholder={'Enter Mission Name'} value={name} onChange={(e) => handleNameChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-1" />
            <input type='text' placeholder={'Enter Time / Mission Points'} value={points} onChange={(e) => handlePointsChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-1" />
            <button onClick={() => handleAddAdvancementClick()} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-medium text-base duration-300 hover:opacity-40'>ADD</button>
        </div>
    )
}
 

const Missions = () => {
    const { playerData, addMission, deleteMission, setMissionProgress } = useStateContext()
    
    const missions = playerData.missions ? playerData.missions : []

    return (<>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Missions</h1>
        <MissionInput handleAddMission={(name, maxPoints) => addMission(name, maxPoints)} />
        {missions.length !== 0 ? missions.map((mission, index) => (
            <MissionBar key={index} name={mission.name} points={mission.points} maxPoints={mission.maxPoints} handleDeleteMission={(name) => deleteMission(name)} handleMissionProgress={(name, value, operation) => setMissionProgress(name, value, operation)} />
        )) : null} 
  </>)
}

export default Missions