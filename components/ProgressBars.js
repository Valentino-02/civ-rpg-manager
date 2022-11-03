import React, { useState } from 'react'
import { useStateContext } from '../context'
import ProgressBar from './ProgressBar'


const AddBtn = ({type, handleAddPoints}) => {
    const [points,setpoints] = useState('')

    const handlepointsChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setpoints(value)
    }

    const handleClickAddPoints = () => {
        if (points === '') {return}
        handleAddPoints(type, points)
        setpoints('')
    }

    return(
        <div className='p-2 relative flex border border-white border-solid '>
            <input type="text" value={points} onChange={(e) => handlepointsChange(e.target.value)} placeholder={'Add to ' + type} className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickAddPoints()} className="fa-solid fa-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
}

const SubtractBtn = ({type, handleSubtractPoints}) => {
    const [points,setpoints] = useState('')

    const handlepointsChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setpoints(value)
    }

    const handleClickAddPoints = () => {
        if (points === '') {return}
        handleSubtractPoints(type, points)
        setpoints('')
    }
    
    return(
        <div className='p-2 relative flex border border-white border-solid '>
            <input type="text" value={points} onChange={(e) => handlepointsChange(e.target.value)} placeholder={'Subtract to ' + type} className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickAddPoints()} className="fa-solid fa-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
}


const ProgressBars = () => {
    const { playerData, setProgressValue} = useStateContext()

    const techProgress = playerData.progressBars.science ? playerData.progressBars.science : 0
    const techMaxValue =  playerData.technologies ? 10 + 3*playerData.technologies.length : 10
    const beliefProgress = playerData.progressBars.religion ? playerData.progressBars.religion : 0
    const beliefMaxValue =  playerData.beliefs ? 10 + 3*playerData.beliefs.length : 10
    const civicProgress = playerData.progressBars.influence ? playerData.progressBars.influence : 0
    const civicMaxValue =  playerData.civics ? 10 + 3*playerData.civics.length : 10

    
  return (
    <div>
        <AddBtn type={'science'} handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} />
        <SubtractBtn type={'science'} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
        <ProgressBar value={techProgress} maxValue={techMaxValue} label={'Science Progress'} />
        <AddBtn type={'religion'} handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} />
        <SubtractBtn type={'religion'} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
        <ProgressBar value={beliefProgress} maxValue={beliefMaxValue} label={'Religion Progress'} />
        <AddBtn type={'influence'} handleAddPoints={(type, value) => setProgressValue(type, value, 'add')} />
        <SubtractBtn type={'influence'} handleSubtractPoints={(type, value) => setProgressValue(type, value, 'subtract')} />
        <ProgressBar value={civicProgress} maxValue={civicMaxValue} label={'Influence Progress'} />
    </div>
  )
}

export default ProgressBars