import React, { useState } from 'react'
import { useStateContext } from '../context'


const InfoBox = ({ name, value, handleAddPopulation, handleSubtractPopulation }) => {

    return (
        <div className='p-2 relative flex border border-white border-solid bg-sky-800'>
            <h1 className='sm:pr-4 select-none text-1xl sm:text-2xl'>
                {name}
            </h1>
            <div className='flex absolute right-2'>
                <i onClick={() => handleAddPopulation(name, value)} className="fa-solid fa-plus pt-1 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i>
                <h1 className={'px-1 sm:px-2 pt-1 text-xl select-none'} >{value}</h1>
                <i onClick={() => handleSubtractPopulation(name, value) } className="fa-solid fa-minus pt-1 cursor-pointer text-xl duration-200 hover:text-rose-900"></i>
            </div>
        </div>
    )
}


const DeletableInfoBox = ({ name, value, handleAddPopulation, handleSubtractPopulation, handleDeleteLabour }) => {

    return (
        <div className='p-2 relative flex border border-white border-solid bg-sky-900'>
            <h1 className='sm:pr-4 select-none text-1xl sm:text-2xl'>
                {name}
            </h1>
            <i onClick={() => handleDeleteLabour(name, value)} className="fa-solid fa-trash pt-1 cursor-pointer text-xl duration-200 hover:text-rose-600"></i>
            <div className='flex absolute right-2'>
                <i onClick={() => handleAddPopulation(name, value, true)} className="fa-solid fa-plus pt-1 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i>
                <h1 className={'px-1 sm:px-2 pt-1 text-xl select-none'} >{value}</h1>
                <i onClick={() => handleSubtractPopulation(name, value, true) } className="fa-solid fa-minus pt-1 cursor-pointer text-xl duration-200 hover:text-rose-900"></i>
            </div>
        </div>
    )
}



const AddLabourBox = ({ handleAddLabour }) => {
    const [labourName,setLabourName] = useState('')

    const handleLabourNameChange = (value) => {
        if (value.length >= 7) {return}
        setLabourName(value)
    }

    const handleClickNewLabour = () => {
        if (labourName === '') {return}
        handleAddLabour(labourName)
        setLabourName('')
    }

    return(
        <div className='p-2 relative flex border border-white border-solid '>
            <input type="text" value={labourName} onChange={(e) => handleLabourNameChange(e.target.value)} placeholder='Add Labour' className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickNewLabour()} className="fa-solid fa-file-circle-plus pt-1 pl-2 cursor-pointer text-xl duration-200 hover:text-cyan-300"></i> 
        </div>                             
    )
} 


const PopulationDistribution = () => {
    const { playerData, setLabourValue, addLabour, removeLabour } = useStateContext()
    const [count, setCount] = useState(100)

    const labours = playerData.labourDistributions ? playerData.labourDistributions : []
    const extraLabours = playerData.extraLabourDistributions ? playerData.extraLabourDistributions : []

    const handleAddPopulation = (name, value, isExtra) => {
        if (count >= 100 || value >= 100) {return}
        setCount(count + 5)
        setLabourValue(name, value + 5, isExtra)
    }

    const handleSubtractPopulation = (name, value, isExtra) => {
        if (count <= 0 || value <= 0) {return}
        setCount(count - 5)
        setLabourValue(name, value - 5)
    }

    const handleDeleteLabour = (name, value) => {
        setCount(count - value)
        removeLabour(name)
    }


    return (<>
        <div className='lg:mx-80 p-2  relative flex items-stretch border border-white border-solid'>
            <h1 className='sm:pr-4 select-none text-1xl sm:text-2xl'>Idle Population</h1>
            <h1 className={'px-1 flex absolute right-2 sm:px-2 pt-1 text-xl select-none'}>{100 - count}</h1>
        </div>
        
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">

        {labours.length !== 0 ? labours.map((labour, index) => (
            <InfoBox key={index} name={labour.name} value={labour.value} handleAddPopulation={handleAddPopulation} handleSubtractPopulation={handleSubtractPopulation} />
        )) : null}

        {extraLabours.length !== 0 ? extraLabours.map((labour, index) => (
            <DeletableInfoBox key={index} name={labour.name} value={labour.value} handleAddPopulation={handleAddPopulation} handleSubtractPopulation={handleSubtractPopulation} handleDeleteLabour={handleDeleteLabour} />
        )) : null}

        <AddLabourBox handleAddLabour={(labourName) => addLabour(labourName)} />
    </div>
    </>)
}

export default PopulationDistribution