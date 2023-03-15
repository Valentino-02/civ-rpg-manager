import React from 'react'

import { usePlayerDataContext } from '../../context/playerDataContext'
import AddEntryInputField from '../GeneralUse/AddEntryInputField'
import AddedEntry from '../GeneralUse/AddedEntry'


const Resources = () => {
    const { civData, addResource, deleteResource } = usePlayerDataContext()
    
    const resources = civData.resources ? civData.resources : []


    return (<>
        <AddEntryInputField 
            handleAddEntry={(name, dsc) => addResource(name, dsc)}
            nameLabel='Resource'
            dscLabel='Optional Description'  
        />
        {resources.length !== 0 ? resources.map((resource, index) => (
            <AddedEntry 
                key={index} 
                name={resource.name} 
                dsc={resource.dsc} 
                handleDeleteEntry={() => deleteResource(resource.name)}
            />
        )) : null}
  </>)
}

export default Resources