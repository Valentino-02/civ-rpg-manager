import React, { useEffect, useState } from 'react'
import { usePlayerDataContext } from '../../context/playerDataContext'


const LabourDistribution = () => {
    const { civData, pushCivProp, filterCivProp, setCivProp } = usePlayerDataContext()
    const [count, setCount] = useState(100)

    const labours = civData.labourDistribution ? civData.labourDistribution : []
  
    const handleAddPopulation = (name, value) => {
        if (count >= 100) {return}
        let index = labours.findIndex((element) => element.name === name)
        setCivProp(`labourDistribution.${index}.value`, value + 5)
        setCount(c => c + 5)
    }

    const handleSubtractPopulation = (name, value) => {
        if (count <= 0 || value <= 0) {return}
        let index = labours.findIndex((element) => element.name === name)
        setCivProp(`labourDistribution.${index}.value`, value - 5)
        setCount(c => c - 5)
    }

    const handleDeleteLabour = (name, value) => {
        setCount(count - value)
        filterCivProp('labourDistribution', name)
    }

    return (<>
        <div className='static flex flex-row p-2 border border-white border-solid lg:mx-80'>
            <h1 className='flex-auto select-none sm:pr-4 text-1xl sm:text-2xl'>Idle Population</h1>
            <h1 className={'px-1 right-2 sm:px-2 pt-1 text-xl select-none ' + (count != 100 ? 'text-red-700' : '')}>{100 - count}</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {labours.map((labour, index) => (
                <DeletableInfoBox 
                    key={index}
                    name={labour.name}
                    value={labour.value}
                    isExtra={labour.isExtra}
                    handleAddPopulation={handleAddPopulation}
                    handleSubtractPopulation={handleSubtractPopulation}
                    handleDeleteLabour={handleDeleteLabour}
                />
            ))}
            <AddLabourBox
            handleAddLabour={(labourName) => pushCivProp('labourDistribution', {name: labourName, value: 0, isExtra: true})}
            />
        </div>
    </>)
}

const DeletableInfoBox = ({ name, value, handleAddPopulation, handleSubtractPopulation, handleDeleteLabour, isExtra }) => {
    return (
        <div className='static flex p-2 border border-white border-solid bg-sky-900/50'>
            {isExtra && <i onClick={() => handleDeleteLabour(name, value)} className="pt-1 text-xl duration-200 cursor-pointer fa-solid fa-trash hover:text-rose-500"></i>}
            <h1 className='capitalize flex flex-auto select-none pl-1 sm:pr-4 text-1xl sm:text-2xl'>
                {name}
            </h1>
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