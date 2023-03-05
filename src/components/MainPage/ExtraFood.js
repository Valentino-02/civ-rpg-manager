import React, { useState } from 'react'
import { useStateContext } from '../../context'
import ProgressBar from '../GeneralUse/ProgressBar'

const AddSubtractBtn = ({ handleAddPoints, handleSubtractPoints, handleAutoSubtractPoints }) => {
    const [points,setpoints] = useState('')

    const handlepointsChange = (value) => {
        const e = Number(value)
        if (isNaN(e)) {return}
        setpoints(value)
    }

    const handleClickAddPoints = () => {
        if (points !== '0') {
            handleAddPoints(points)
            setpoints('') 
        }
        handleAddPoints('1')
        setpoints('')   
    }

    const handleClickSubtractPoints = () => {
        if (points !== '0') {
            handleSubtractPoints(points)
            setpoints('')
        }
        handleSubtractPoints('1')
        setpoints('')
    }
    
    return(
        <div className='p-2 flex-2  '>
            <input type="text" value={points} onChange={(e) => handlepointsChange(e.target.value)} placeholder={'0'} className='bg-slate-700 text-white p-2 max-w-[4ch]' />
            <i onClick={() => handleClickAddPoints()} className="fa-solid fa-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
            <i onClick={() => handleClickSubtractPoints()} className="fa-solid fa-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
            <i onClick={() => handleAutoSubtractPoints()} className="fa-solid fa-square-minus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
}


const FoodBar = ({ points, maxPoints, handleFoodProgress}) => {

    return(
        <div className='flex items-stretch gap-2'>
        <ProgressBar label={'extra food'} value={points} maxValue={maxPoints} />
        <AddSubtractBtn handleAddPoints={(value) => handleFoodProgress( value, 'add')} handleSubtractPoints={(value) => handleFoodProgress(value, 'subtract')} handleAutoSubtractPoints={() => handleFoodProgress(maxPoints, 'subtract')} />
    </div>

    )
}


const PopulationBar = ({ points, maxPoints, handlePopulationProgress}) => {

    return(
        <div className='flex items-stretch gap-2'>
        <ProgressBar label={'population level'} value={points} maxValue={maxPoints} />
        <AddSubtractBtn handleAddPoints={(value) => handlePopulationProgress( value, 'add')} handleSubtractPoints={(value) => handlePopulationProgress(value, 'subtract')} handleAutoSubtractPoints={() => handlePopulationProgress(0, 'subtract')} />
    </div>

    )
}

const ExtraFood = () => {
    const { playerData, setFoodProgress, setPopulationProgress } = useStateContext()
    
    const extraFood = playerData.extraFood ? playerData.extraFood : 0
    const populationSize = playerData.populationSize ? playerData.populationSize: 0

    const maxPoints = 10 + (populationSize*5)

    return (<>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Food and Population</h1>
        <FoodBar points={extraFood} maxPoints={maxPoints} handleFoodProgress={(value, operation) => setFoodProgress(value, operation)} />
        <PopulationBar points={populationSize} maxPoints={10} handlePopulationProgress={(value, operation) => setPopulationProgress(value, operation)} />
  </>)
}

export default ExtraFood