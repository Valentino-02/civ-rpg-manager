import React, { useState } from 'react'
import { useStateContext } from '../context'


const ResourceInput = ({ handleAddResource}) => {
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

    const handleAddResourceClick = () => {
        if (name === '') {return}
        handleAddResource(name, dsc)
        setName('')
        setDsc('')
    }

    return(
        <div className='flex items-stretch divide-x mb-5'>
            <input type='text' placeholder={'Enter Resource'} value={name} onChange={(e) => handleNameChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-2" />
            <input type='text' placeholder={'Enter Optional Description'} value={dsc} onChange={(e) => handleDscChange(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-white bg-slate-700 flex-1" />
            <button onClick={() => handleAddResourceClick()} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-medium text-base duration-300 hover:opacity-40'>ADD</button>
        </div>
    )
}


const ResourceField = ({ name, dsc, handleDeleteResource}) => {

    return(
        <div className='flex items-stretch divide-x border border-white border-solid' >
            <input disabled type='text' placeholder={name} value={name} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-2" />
            <input disabled type='text' placeholder={dsc} value={dsc} onChange={(e) => {}} className="outline-none p-3 text-base sm:text-lg text-white bg-teal-700 flex-1" />   
            <button onClick={() => handleDeleteResource(name)} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white font-medium text-base duration-300 hover:opacity-40'>DEL</button>
        </div>

    )
}


const Resources = () => {
    const { playerData, addResource, deleteResource } = useStateContext()
    
    const resources = playerData.resources ? playerData.resources : []


    return (<>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl mb-2 mt-8'>Resources</h1>
        <ResourceInput  handleAddResource={(name, dsc) => addResource(name, dsc)} />
        {resources.length !== 0 ? resources.map((resource, index) => (
            <ResourceField key={index} name={resource.name} dsc={resource.dsc} handleDeleteResource={(name) => deleteResource(name)} />
        )) : null}
  </>)
}

export default Resources