import React, { useState } from 'react'
import { useStateContext } from '../context'
import ProgressBar from './ProgressBar'


const AddBtn = (type, handleAddPoints) => {
    const [labourName,setLabourName] = useState('')

    const handleLabourNameChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setLabourName(value)
    }

    const handleClickNewLabour = () => {
        if (labourName === '') {return}
        handleAddPoints(type, labourName)
        setLabourName('')
    }

    return(
        <div className='p-2 relative flex border border-white border-solid '>
            <input type="text" value={labourName} onChange={(e) => handleLabourNameChange(e.target.value)} placeholder={'Add to ' + type} className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickNewLabour()} className="fa-solid fa-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
}

const SubtractBtn = (type, handleSubtractPoints) => {
    const [labourName,setLabourName] = useState('')

    const handleLabourNameChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setLabourName(value)
    }

    const handleClickNewLabour = () => {
        if (labourName === '') {return}
        handleSubtractPoints(type, labourName)
        setLabourName('')
    }
    
    return(
        <div className='p-2 relative flex border border-white border-solid '>
            <input type="text" value={labourName} onChange={(e) => handleLabourNameChange(e.target.value)} placeholder={'Subtract to ' + type} className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickNewLabour()} className="fa-solid fa-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
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

    const handleAddPoints = (name, value) => {
        setProgressValue(name, value)
    }

    const handleSubtractPoints = (name, value) => {
        setProgressValue(name, value)
    }

  return (
    <div>
        <AddBtn type={'science'} handleAddPoints={handleAddPoints} />
        <SubtractBtn type={'science'} handleSubtractPoints={handleSubtractPoints} />
        <ProgressBar value={techProgress} maxValue={techMaxValue} label={'Science Progress'} />
        <AddBtn type={'religion'} handleAddPoints={handleAddPoints} />
        <SubtractBtn type={'religion'} handleSubtractPoints={handleSubtractPoints} />
        <ProgressBar value={beliefProgress} maxValue={beliefMaxValue} label={'Religion Progress'} />
        <AddBtn type={'influence'} handleAddPoints={handleAddPoints} />
        <SubtractBtn type={'influence'} handleSubtractPoints={handleSubtractPoints} />
        <ProgressBar value={civicProgress} maxValue={civicMaxValue} label={'Influence Progress'} />
    </div>
  )
}

export default ProgressBars