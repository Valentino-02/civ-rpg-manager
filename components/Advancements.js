import React, { useState } from 'react'
import { useStateContext } from '../context'


const AdvancmentField = ({ name, dsc, fieldName, handleDeleteAdvancement}) => {

    return(
        <div className='flex items-stretch divide-x border border-white border-solid' >
            <input disabled type='text' placeholder={name} value={name} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-2" />
            <input disabled type='text' placeholder={dsc} value={dsc} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-1" />   
            <button onClick={() => handleDeleteAdvancement(name, fieldName)} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white font-medium text-base duration-300 hover:opacity-40'>DEL</button>
        </div>

    )
}


const AdvancmentInput = ({ fieldName, handleAddAdvancement}) => {
    const [name,setName] = useState('')
    const [dsc,setDsc] = useState('')

    const handleNameChange = (value) => {
        if (value.length >= 20) {return}
        setName(value)
    }

    const handleDscChange = (value) => {
        if (value.length >= 70) {return}
        setDsc(value)
    }

    const handleAddAdvancementClick = () => {
        if (name === '' || dsc === '') {return}
        console.log('oiii')
        handleAddAdvancement(name, dsc, fieldName)
        setName('')
        setDsc('')
    }

    return(
        <div className='flex items-stretch divide-x mb-5'>
            <input type='text' placeholder={'Enter ' + fieldName} value={name} onChange={(e) => handleNameChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-2" />
            <input type='text' placeholder={'Enter Description'} value={dsc} onChange={(e) => handleDscChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-1" />
            <button onClick={() => handleAddAdvancementClick()} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-medium text-base duration-300 hover:opacity-40'>ADD</button>
        </div>
    )
}


const Advancements = () => {
    const { playerData, addAdvancement, deleteAdvancement } = useStateContext()
    
    const technologies = playerData.technologies
    const beliefs = playerData.beliefs
    const civics = playerData.civics


    return (<>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Technologies</h1>
        <AdvancmentInput fieldName={'technology'} handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
        {technologies.length !== 0 ? technologies.map((technology, index) => (
            <AdvancmentField key={index} fieldName={'technology'} name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
        )) : null}

        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Beliefs</h1>
        <AdvancmentInput fieldName={'belief'} handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
        {beliefs.length !== 0 ? beliefs.map((technology, index) => (
            <AdvancmentField key={index} fieldName={'belief'} name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
        )) : null}

        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Civics</h1>
        <AdvancmentInput fieldName={'civic'} handleAddAdvancement={(name, dsc, fieldName) => addAdvancement(name, dsc, fieldName)} />
        {civics.length !== 0 ? civics.map((technology, index) => (
            <AdvancmentField key={index} fieldName={'civic'} name={technology.name} dsc={technology.dsc} handleDeleteAdvancement={(name, fieldName) => deleteAdvancement(name, fieldName)} />
        )) : null}
  
  </>)
}

export default Advancements