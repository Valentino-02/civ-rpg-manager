import React, { useEffect, useState } from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'


const LabourDistribution = () => {
    const { civData, setLabourValue, addLabour, removeLabour } = usePlayerDataContext()
    const [count, setCount] = useState(100)
    const [startingLabours, setStartingLabours] = useState([])
    const [extraLabours, setExtraLabours] = useState([])

    const labours = civData.labourDistribution ? civData.labourDistribution : []


    useEffect(() => {
        let newLabours = labours.filter((labour) => (labour.isExtra === false))
        setStartingLabours(newLabours)
    }, []) 
    
    useEffect(() => {
        let newLabours = labours.filter((labour) => (labour.isExtra === true))
        setExtraLabours(newLabours)
    }, [labours])     

    const handleAddPopulation = (name, value, isExtra) => {
        if (count >= 100 || value >= 100) {return}
        setCount(count + 5)
        setLabourValue(name, value + 5, isExtra)
    }

    const handleSubtractPopulation = (name, value) => {
        if (count <= 0 || value <= 0) {return}
        setCount(count - 5)
        setLabourValue(name, value - 5)
    }

    const handleDeleteLabour = (name, value) => {
        setCount(count - value)
        removeLabour(name)
    }

    return (<>
        <div className='static flex flex-row p-2 border border-white border-solid lg:mx-80'>
            <h1 className='flex-auto select-none sm:pr-4 text-1xl sm:text-2xl'>Idle Population</h1>
            <h1 className={'px-1 right-2 sm:px-2 pt-1 text-xl select-none'}>{100 - count}</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {startingLabours.length !== 0 ? labours.map((labour, index) => (
                <InfoBox key={index} name={labour.name} value={labour.value} handleAddPopulation={handleAddPopulation} handleSubtractPopulation={handleSubtractPopulation} />
            )) : null}
            {extraLabours.length !== 0 ? extraLabours.map((labour, index) => (
                <DeletableInfoBox key={index} name={labour.name} value={labour.value} handleAddPopulation={handleAddPopulation} handleSubtractPopulation={handleSubtractPopulation} handleDeleteLabour={handleDeleteLabour} />
            )) : null}
            <AddLabourBox handleAddLabour={(labourName) => addLabour(labourName)} />
        </div>
    </>)
}


const InfoBox = ({ name, value, handleAddPopulation, handleSubtractPopulation }) => {
    return (
        <div className='static flex p-2 border border-white border-solid bg-sky-800'>
            <h1 className='flex-auto select-none sm:pr-4 text-1xl sm:text-2xl'>
                {name}
            </h1>
            <div className='static flex right-2'>
                <i onClick={() => handleAddPopulation(name, value)} className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-plus hover:text-cyan-300"></i>
                <h1 className={'px-1 sm:px-2 pt-1 text-xl select-none'} >{value}</h1>
                <i onClick={() => handleSubtractPopulation(name, value) } className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-minus hover:text-cyan-300"></i>
            </div>
        </div>
    )
}

const DeletableInfoBox = ({ name, value, handleAddPopulation, handleSubtractPopulation, handleDeleteLabour }) => {
    return (
        <div className='static flex p-2 border border-white border-solid bg-sky-900'>
            <h1 className='flex-auto select-none sm:pr-4 text-1xl sm:text-2xl'>
                {name}
            </h1>
            <i onClick={() => handleDeleteLabour(name, value)} className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-trash hover:text-rose-500"></i>
            <div className='static flex right-2'>
                <i onClick={() => handleAddPopulation(name, value, true)} className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-plus hover:text-cyan-300"></i>
                <h1 className={'px-1 sm:px-2 pt-1 text-xl select-none'} >{value}</h1>
                <i onClick={() => handleSubtractPopulation(name, value, true) } className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-minus hover:text-cyan-300"></i>
            </div>
        </div>
    )
}

const AddLabourBox = ({ handleAddLabour }) => {
    const [labourName,setLabourName] = useState('')
    const maxNameLength = 7

    const handleLabourNameChange = (value) => {
        if (value.length >= maxNameLength) {return}
        setLabourName(value)
    }

    const handleClickNewLabour = () => {
        if (labourName === '') {return}
        handleAddLabour(labourName)
        setLabourName('')
    }

    return(
        <div className='static flex p-2 border border-white border-solid'>
            <input type="text" value={labourName} onChange={(e) => handleLabourNameChange(e.target.value)} placeholder='Add Labour' className='bg-slate-700 text-white p-2 w-full max-w-[40ch]' />
            <i onClick={() => handleClickNewLabour()} className="pt-1 pl-2 text-xl duration-200 cursor-pointer fa-solid fa-file-circle-plus hover:text-cyan-300"></i> 
        </div>                             
    )
} 

export default LabourDistribution